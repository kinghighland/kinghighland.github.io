const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('.'));

app.get('/api/gallery', function(req, res) {
  let root = path.join(__dirname, 'demos');
  let demoList = fs.readdirSync(root)
    .filter(f => {
      const fullPath = path.join(root, f);
      // 目录名称以 'case'（不分大小写）开头即可
      return fs.lstatSync(fullPath).isDirectory() && f.toLowerCase().startsWith('case');
    })
    .map(dir => {
      let files = fs.readdirSync(path.join(root, dir)).filter(fn => /\.(png|jpg|jpeg|gif)$/i.test(fn));
      files.sort();
      return { name: dir, folder: dir, images: files };
    });
  res.json({ demos: demoList });
});

// node gallery-list.js 启动 http 服务，页面显示 js 自动产生的 case 列表；
// 但 gihub 不支持动态页面，因此只能改为载入 json 数据的静态页面
// 每次更新时：node gen-gallery-json.js 产生 gallery.json
// 由 gallery.html 载入 json 数据显示页面
app.listen(8000, ()=>console.log('listening on 8000'));