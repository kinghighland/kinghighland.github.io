// gihub 不支持动态页面，因此只能改为载入 json 数据的静态页面
// 每次更新时：node gen-gallery-json.js 产生 gallery.json
// 由 gallery.html 载入 json 数据显示页面

// gen-gallery-json.js
const fs = require('fs');
const path = require('path');

const demosRoot = path.join(__dirname, 'demos');

const isImage = f => /\.(png|jpe?g|gif)$/i.test(f);

const demoFolders = fs.readdirSync(demosRoot)
    .filter(f => fs.statSync(path.join(demosRoot, f)).isDirectory());

const demos = demoFolders.map(folder => {
    const images = fs.readdirSync(path.join(demosRoot, folder))
        .filter(isImage)
        .sort((a, b) => {
            const aMatch = a.match(/^\d+/);
            const bMatch = b.match(/^\d+/);
            if (aMatch && bMatch) {
                const aNum = parseInt(aMatch[0], 10);
                const bNum = parseInt(bMatch[0], 10);
                if (aNum !== bNum) return aNum - bNum;
                return a.localeCompare(b);
            }
            if (aMatch) return -1;
            if (bMatch) return 1;
            return a.localeCompare(b);
        });
    return {
        name: folder,
        folder: folder,
        images: images
    };
});
const data = { demos };

// 写入 JSON 文件
fs.writeFileSync(path.join(__dirname, 'gallery.json'), JSON.stringify(data, null, 2), 'utf-8');
console.log('gallery.json 已生成，共有 demo：', demos.length);