
# Ocean LAN - 个人主页

一个展示个人技术作品和专业背景的响应式个人主页网站。

## 📋 项目简介

这是兰海（Ocean LAN）的个人主页网站，展示了其在通信网络信令分析和AI大模型领域的专业作品与技术文章。网站采用现代化设计，具有良好的用户体验和响应式布局。

## 🚀 主要特性

- **响应式设计** - 适配各种设备屏幕尺寸
- **现代化UI** - 使用Font Awesome图标和CSS3动画效果
- **完整导航** - 包含首页、作品展示、当前项目、文章和简历等模块
- **项目展示** - 详细展示个人技术作品和进展情况
- **文章集成** - 展示微信公众号技术文章，支持弹窗二维码扫码关注
- **简历下载** - 提供PDF格式简历下载
- **多语言切换** - 支持中英文切换
- **大模型分享** - 提供Ollama与HuggingFace模型直达链接

## 📁 项目结构

```
├── index.html                # 主页面文件
├── css/
│   └── styles.css            # 样式文件
├── js/
│   └── script.js             # JavaScript交互文件
├── images/                   # 图片资源目录
│   ├── avator.jpg            # 个人头像（注意拼写）
│   ├── flowshark.png         # 云流鲨项目截图
│   ├── deepocean.png         # 深海项目截图
│   ├── current-agent-demo.png    # 智能体项目运行界面
│   ├── current-llm-demo.png      # 大模型项目运行界面
│   ├── ollama-logo.png       # Ollama平台logo
│   ├── huggingface_logo-noborder.svg # HuggingFace平台logo
│   └── weixin-mp-dq.jpg      # 微信公众号二维码
├── files/
│   └── LANHAI-CV-CHN-202506.pdf  # 个人简历PDF
└── gallery.html              # 作品详情页（如有）
```

## 🛠️ 技术栈

### 前端技术
- **HTML5** - 页面结构
- **CSS3** - 样式和动画
- **JavaScript** - 交互功能
- **Font Awesome 6.0.0** - 图标库

### 专业领域
- **通信网络** - 2G/3G/4G/5G/IMS
- **信令分析** - SIP、3GPP协议
- **AI技术** - LLaMA-Factory、Llama.cpp、Ollama
- **编程语言** - Python、C++、Vue.js
- **数据库** - MySQL、ClickHouse、MS-SQL、Hadoop

## 📖 内容模块

### 1. 作品展示
- **云流鲨 (Flowshark)** - PCAP格式信令分析工具，专用于VoLTE/VoNR呼叫失败分析
- **深海 (DeepOcean)** - 企业级信令监测系统，曾服务于摩托罗拉和诺基亚

### 2. 当前项目
- **信令分析智能体**
  - 基于大模型和MCP工具的智能信令分析系统
  - 展示运行界面截图
  - 相关文章直达
- **信令分析大模型**
  - 基于Qwen3-8B-Instruct的Fine-Tuning微调模型
  - 提供 Ollama 与 HuggingFace 模型直达链接
  - 展示运行界面截图
  - 相关文章直达

### 3. 技术文章
展示来自"深海·流鲨"微信公众号的多篇技术文章，涵盖：
- AI大模型训练与微调
- 信令分析技术
- 3GPP规范应用
- 通信网络故障诊断
- 支持弹窗二维码扫码关注公众号

## 🚀 快速开始

1. **克隆项目**
```bash
git clone [项目地址]
cd kinghighland.github.io
```

2. **本地运行**
- 直接用浏览器打开 `index.html` 文件
- 或使用本地服务器（推荐）：
```bash
# 使用Python启动本地服务器
python -m http.server 8000
# 访问 http://localhost:8000
```

3. **自定义配置**
- 修改 `index.html` 中的个人信息、项目内容、文章链接等
- 替换 `images/` 目录中的图片资源
- 更新 `files/` 目录中的简历文件
- 调整 `css/styles.css` 中的样式配置

## 📱 功能特点

- **打字机效果** - 首页动态文字展示（支持纯文本打字动画）
- **滚动指示器** - 页面滚动引导
- **项目进度条** - 可视化项目完成进度
- **响应式导航** - 移动端汉堡菜单
- **多语言切换** - 支持中英文切换
- **模型分享按钮** - Ollama/HuggingFace平台直达，带平台logo美观按钮
- **微信二维码弹窗** - 文章区“查看更多”按钮弹出公众号二维码，扫码关注
- **外链跳转** - 文章和简历下载链接

## 📞 联系方式

- **邮箱**: kinghighland@gmail.com
- **GitHub**: github.com/kinghighland
- **微信公众号**: 深海·流鲨（页面底部和文章区均可扫码关注）

## 📄 许可证

© 2025 Ocean LAN. All rights reserved.

---

> 这是一个专业的个人主页项目，展示了通信网络和AI技术领域的专业作品。如需了解更多技术细节，请关注相关文章或直接联系作者。
