### 简介

> #### 基于 vue + vue-router + webpack + axios + echarts + element ui
>
> #### 搭建得简易后台利用 vue-cli 脚手架快速简洁的创捷项目结构;
>
> #### 由于不会后台语言，所以接口都是本地得静态 Json 文档,也因此很多功能并没能实现
>
> #### vuex 没有投入使用，只是做好了模板

### 项目结构

```constructure
--api -> axios 配置文件（暂时没有用）

--src -> 源码
--src-components -> 组件
--src-components-common -> 通用组件
--src-components-private -> 独立组件
--src-router -> 路由
--src-view -> 页面
--src-view-login -> 登录
--src-view-home -> 主内容页面
--src-main.js -> 入口文件
--src-App.js -> 渲染展示
--src-store -> vuex.store
--src-store-index -> store出口
--src-store-dialog.js -> dialog模块
--src-store-login.js -> 登录模块

--static -> 静态文件

--tableData -> json 数据
--newsData  -> json 数据
--echartData -> json 数据
```

### Build Setup

```bash
# install dependencies -> 安装依赖
npm install

# serve with hot reload at localhost:8080 -> 在本地8080端口运行
npm run dev

# build for production with minification -> 打包生产版本
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
