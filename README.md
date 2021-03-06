<img src="assets/logo.png" width="100">

# live2d

> 给你的桌面多一点趣味~😁


## 预览

### Mac 10.14

<img src="assets/preview.gif" width="600">

### Windows 10

<img src="assets/Xnip2020-01-06_01-03-19.png" width="300">

### Ubuntu 18

<img src="assets/Xnip2020-01-06_23-25-25.png" width="300">

## 功能

- [x] **导入在线 Model** (再也不用下载，直接使用 GitHub 上的 Model，输入地址就可以加载了~~，可以通过*调试*查看加载详情)
- [x] 导入本地 Model 【部分设置不会保存，正在解决中 😒】
- [x] 设置 Model (目前只能设置 w 和 h)
- [x] @置顶
- [x] 忽略点击
- [x] 开机启动
- [x] 小工具
- [x] 移动位置（按住 Alt）
- [x] 放大缩小（Ctrl/Cmd 和 +、-、0 控制）
- [x] 调试
- [x] ~~提醒休息（默认 25 分钟）~~（移到插件中心，使用 `take-a-rest`插件）

### 注意

> 选择模型文件夹中的模型配置文件（一般为`model.json`/`index.json`，必须包含`model`/`textures`/`motions`三个字段，没有的话可以尝试自行添加），将会导入该配置文件所在的文件夹

> 导入的模型如果显示不完整，可以【设置 Model】设置其宽度和高度。如果还存在问题可以尝试【重新渲染】

> 一些资源推荐：[xiazeyu/live2d-widget-models](https://github.com/xiazeyu/live2d-widget-models) / [xiaoski/live2d_models_collection](https://github.com/xiaoski/live2d_models_collection)/ [QiShaoXuan/live2DModel](https://github.com/QiShaoXuan/live2DModel) / [梦象](https://mx.paul.ren/) 上的 Model 还不错，可以自行下载或使用在线地址

> 在线地址使用，比如这里的[live2d-widget-models/tree/master/packages/live2d-widget-model-miku/](https://github.com/xiazeyu/live2d-widget-models/tree/master/packages/live2d-widget-model-miku/assets) ，导入这个地址[https://raw.githubusercontent.com/xiazeyu/live2d-widget-models/master/packages/live2d-widget-model-miku/assets/miku.model.json](https://raw.githubusercontent.com/xiazeyu/live2d-widget-models/master/packages/live2d-widget-model-miku/assets/miku.model.json)

### 插件中心

<img src="assets/live2d-plugin.gif" width="400">

### 托盘

<img src="assets/2020-03-15-15-14-47.png" width="200">

## 后续功能

- 选词翻译
- 换壁纸
- 记录剪切板
- 日常清理
- 自定义对话
- ...

如果你有什么好的想法，也欢迎留言交流~👏🏻

## 特别感谢

### CDN 赞助商

<a href="https://www.maoyuncloud.com" target="_blank"><img src="assets/maocloud.png" width="150" alt="猫云"></a>

## 安装

[这里](https://github.com/joker8023/live2d/releases)去下载最新版本

## 开发

```
$ yarn install
$ yarn run start
```
