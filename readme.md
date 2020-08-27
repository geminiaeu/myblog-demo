# myblog-demo








- 本仓库代码使用 [MIT](https://github.com/SigureMo/notev/blob/master/LICENSE) 协议进行开源，但是全部文档内容使用 [CC 4.0 BY-SA](https://creativecommons.org/licenses/by-sa/4.0/) 协议进行发布
- 国内访问：[https://zpj80231.gitee.io/znote/](https://zpj80231.gitee.io/znote/) 速度加载会快一点

## 项目运行

- 在项目文件夹下执行命令，加载依赖：`npm install`
- 在项目文件夹下执行命令，运行项目：`npm run dev`

  

## 项目架构

- 采用vuepress构建

```lua
##需要自己写主题样式的话，在.vuepress/ 下新建theme文件夹并按如下目录布局
Dev
├─── docs
│   └── .vuepress   // 配置目录
│   │    ├── public // 静态资源
│   │    ├── theme  // 主题
│   │    │   ├── components // 组件
│   │    │   ├── global-components // 全局组件
│   │    │   ├── layouts // 布局(包括首页在内)
│   │    │   ├── styles  // 样式
│   │    │   ├── util 	 // 工具
│   │    │   ├── index.js // 入口配置
│   │    │   ├── noopModule.js // 依赖注入
│   │    │   ├── package.json  // 主题依赖
│   │    │   ├── README.md     // 主题说明
│   │    └── config.js
│   ├── about   // 项目模块
│   ├── views   // 项目模块
│   └── README.md   // 首页
└── package.json //项目依赖
```

## 项目介绍

- 知识点复习和面试总结（不断完善中，欢迎加入！）
- 技术栈知识点笔记总结（知识小结）
- 其它...
