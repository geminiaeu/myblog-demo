# VuePress学习笔记

## 第1章 概述

### 1.1 VuePress概述

VuePress 由两部分组成：第一部分是一个极简静态网站生成器，它包含由 Vue 驱动的主题系统和插件 API，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。

- Vue 驱动的静态网站生成器
- 基于markdown语法生成网页
- 可自定义和扩展样式
- 可以发布至github
- 详情请看官网[VuePress](https://vuepress.vuejs.org/zh/)

### 1.2 目录结构

VuePress 遵循 “约定优于配置” 的原则，推荐的目录结构如下：

```shell
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

其中，

docs/.vuepress: 用于存放全局的配置、组件、静态资源等。

**docs/.vuepress/config.js**: 配置文件的入口文件，也可以是 YML 或 toml。

docs/.vuepress/public: 静态资源目录。

docs/.vuepress/theme: 用于存放本地主题。

docs/.vuepress/styles: 用于存放样式相关的文件。

docs/.vuepress/styles/index.styl: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
   默认把 docs 目录作为 targetDir，即下面所有的“文件的相对路径”都是相对于 docs 目录的，对于上述的目录结构，默认页面路由地址如下：

| 文件的相对路径   | 页面路由地址 |
| ---------------- | ------------ |
| /README.md       | /            |
| /guide/README.md | /guide/      |
| /config.md       | /config.html |

## 第2章 配置

### 2.1 安装初始化

1. 全局安装

```shell
$ npm install -g vuepress
```

2. 创建个文件夹作为目录

```shell
$ mkdir myblog
```

3. 项目初始化

```shell
$ cd myblog
$ npm init -y
```

   初始化后会生成一个package.json文件

4. 在当前目录中创建一个docs目录

```shell
$ mkdir docs
$ cd docs
```

5. 首页内容书写(默认主题提供)

   在docs目录里面创建一个README.md的文件，输入内容

```yaml
# docs\README.md
---
home: true
heroImage: /img/head.jpg
# heroText: Hero 标题
# tagline: Hero 副标题
actionText:  Go
actionLink: /basicnote/Typora
features:
- title: 
  details: 冲破岁月的蕃篱
- title: 
  details: 凿碎旧时的月光
- title: 
  details: 阴霾渐渐散去
---
```

6. 运行博客

   在package.json里面添加脚本

```json
// package.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
}
```

然后在终端(命令行工具)输入启动命令

```shell
$ npm run dev
```

### 2.2 基本配置

#### 2.2.1 配置文件

1. 在docs目录下创建.vuepress目录

```shell
$ mkdir .vuepress
$ cd .vuepress
# 主要存放配置
```

2. 新建总配置文件config.js

   config是整个项目的核心配置文件，所有菜单、栏目相关的配置均配置在该模块中

```shell
$ touch config.js
```

   在config.js中加入内容

```js
// .vuepress/config.js
module.exports = {
  title: 'xx博客',
  description: '欢迎来到我的博客'
}
```

#### 2.2.2 配置

1. 基本配置

|  配置属性   |            类型            |     默认值     | 说明                                              |
| :---------: | :------------------------: | :------------: | ------------------------------------------------- |
|    base     |           string           |       /        | 部署站点的基础路径                                |
|    title    |           string           |   undefined    | 网站的标题                                        |
| description |           string           |   undefined    | 网站的描述                                        |
|    head     |           Array            |       []       | 额外的需要被注入到当前页面的 HTML <head> 中的标签 |
|    host     |           string           |   '0.0.0.0'    | 指定用于 dev server 的主机名                      |
|    port     |           number           |      8080      | 指定 dev server 的端口                            |
|    dest     |          stringr           | .vuepress/dist | 指定 vuepress build的输出目录                     |
|   locales   | { [path: string]: Object } |   undefined    | 提供多语言支持的语言配置。                        |

2. Styling
- palette.styl
   如果要对默认预设的样式进行简单的替换，或者定义一些变量供以后使用，可以创建一个 .vuepress/styles/palette.styl 文件。 可以调整的一些变量如下:
```stylus
// .vuepress/styles/palette.styl 
// 颜色
$accentColor = #3eaf7c
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
$arrowBgColor = #ccc
$badgeTipColor = #42b983
$badgeWarningColor = darken(#ffe564, 35%)
$badgeErrorColor = #DA5961

// 布局
$navbarHeight = 3.6rem
$sidebarWidth = 20rem
$contentWidth = 740px
$homePageWidth = 960px

// 响应式变化点
$MQNarrow = 959px
$MQMobile = 719px
$MQMobileNarrow = 419px
```

- index.styl
VuePress 提供了一种添加额外样式的简便方法。可以创建一个 .vuepress/styles/index.styl 文件。这是一个 Stylus 文件，也可以使用正常的 CSS 语法。
3. 主题

|  配置属性   |  类型  |  默认值   | 说明                                               |
| :---------: | :----: | :-------: | -------------------------------------------------- |
|    theme    | string | undefined | 使用自定义主题时指定该属性                         |
| themeConfig | Object |    {}     | 为当前的主题提供一些配置，选项依赖于正在使用的主题 |

4. Pluggable


| 配置属性 |     类型     |     默认值     | 说明                       |
| :------: | :----------: | :------------: | -------------------------- |
| plugins  | Object\Array | undefined | 使用插件 |

### 2.3 导航栏配置

#### 2.3.1 导航栏logo

   通过 themeConfig.logo 增加导航栏 Logo ，Logo 可以被放置在公共文件目录：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    logo: '/img/logo.png',
  }
}
```

#### 2.3.2 导航栏链接

通过 themeConfig.nav 增加一些导航栏链接:

1. 配置 themeConfig.nav

   创建并进入config/nav目录，创建index.js，   加入如下内容：

```js
// .vuepress\config\nav\index.js
module.exports = [{
        text: '主页',
        link: '/',
    },
    {
        text: '基础笔记',
        link: '/basicnote/',
        items: [
            { text: 'Typora笔记', link: '/basicnote/Typora' }
        ]
    },
    {
        text: 'VuePress',
        link: '/vuepressnote/',
        items: [
            { text: 'Vuepress笔记', link: '/vuepressnote/VuePress' },
        ]
    },
    {
        text: "github",
        link: "https://github.com/geminiaeu"
    }
]
```

2. 在config.js中引入

```js
// .vuepress/config.js
const nav = require('./config/nav/')
module.exports = {
  themeConfig: {
    ...,
    nav
  }
}
```

3. nav配置注意点

- nav可以支持本地目录和链接;
- nav由text、link、items组成:
  - text：显示内容
  - link：链接，可以指向本地目录和http地址
  - items：可以包含多个text和link，可以继续反复套用组成复杂的菜单

#### 2.3.3 禁用导航栏

- 通过 YAML front matter 来禁用某个指定页面的导航栏：

```yaml
---
navbar: false
---
```

- 使用 themeConfig.navbar 来禁用所有页面的导航栏：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    navbar: false
  }
}
```

### 2.4 侧边栏配置

#### 2.4.1 侧边栏配置

1. 配置 themeConfig.sidebar

   通过使用对象来将侧边栏划分成多个组，针对不同的页面组来显示不同的侧边栏，应遵循以下的侧边栏配置：

```js
// .vuepress\config\sidebar\index.js
module.exports = {
    '/basicnote/': [
        '',
        {
            title: 'Typora笔记',
            collapsable: true,
            sidebarDepth: 2,
            children: [
                '/basicnote/Typora',
            ]
        }
    ],
    '/vuepressnote/': [
        '',
        {
            title: "VuePress笔记",
            collapsable: true,
            children: [
                '/vuepressnote/VuePress',
            ]
        }
    ]
}
```

2. 在config.js中引入

```js
// .vuepress/config.js
const sidebar = require('./config/sidebar/')
module.exports = {
  themeConfig: {
    ...,
    sidebar
  }
}
```

3.  sidebar配置注意点

- sidebar参数解释：
  - title：表示侧边栏大标题
  - collapsable：是否可折叠
  - children：具体的.md文件，这里无需指定后缀
  - sidebarDepth：设置显示侧边栏的深度

#### 2.4.2 自动生成侧栏与禁用侧边栏

1. 自动生成侧栏

- 通过配置来在所有页面标题链接的侧边栏的自动生成：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: 'auto'
  }
}
```

- 在多语言模式下, 你在某一特定的语言下侧边栏的自动生成：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
     '/zh/': {
       sidebar: 'auto'
     }
  }
}
```

- 通过 YAML front matter 来实现当前页面标题链接的侧边栏的自动生成：

```yaml
---
sidebar: auto
---
```

2. 禁用侧边栏

- 通过 YAML front matter 来禁用指定页面的侧边栏：

```yaml
---
sidebar: false
---
```

### 2.5 静态资源配置

   由于所有的 Markdown 文件都会被 webpack 编译成 Vue 组件，应该更倾向于使用相对路径来引用所有的静态资源。
   VuePress程序默认的图片目录是/docs/.vuepress/public：

```shell
$ cd .vuepress
$ mkdir public
```
1. 图片

   若要指定首页显示图片，# /docs/.vuepress/img/public目录下有一张head.jpg的图片那么需要将首页内容中的图片路径更改成如下
```yaml
# \README.md
heroImage: /img/head.jpg
```
   增加一个自定义的 favicon：
```js
// .vuepress\config.js
module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ]
}
```
2. CSS
   
   CSS与图片路径一样，比如js中要加载指定的CSS文件，如下:
- 在public目录下新建一个css目录，编辑样式文件内容
 ```shell
$ cd public
$ mkdir css
$ touch style.css
 ```
- 修改.vuepress下的config.js
```js
// .vuepress\config.js
head: [
        ['link', {rel: 'icon', href: '/logo.jpg'}],
        ["link", { rel: "stylesheet", href: "/css/style.css" }]
    ],
```
- 重启预览效果

3. JS
   
   如果要自定义一些js动态效果，操作类似CSS：
- 在public目录下新建一个js目录，编辑内容
```shell
$ cd public
$ mkdir js
$ touch main.js
```
- 修改.vuepress下的config.js
```js
// .vuepress\config.js
head: [
        ['link', {rel: 'icon', href: '/logo.jpg'}],
        ["link", { rel: "stylesheet", href: "/css/style.css" }],
        ["script", { charset: "utf-8", src: "/js/main.js" }],
    ],
```
- 重启预览效果
### 2.6  Markdown 拓展

1. 目录

- 输入
```md
[[toc]]
```

- 输出
[[toc]]
2. 自定义容器

- 输入
```md
::: tip 
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```
- 输出
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
- 自定义标题：
```md
::: danger STOP
危险区域，禁止通行
:::
```
3. 行号

通过配置来为每个代码块显示行号：
```js
.vuepress/config.js
module.exports = {
  markdown: {
    lineNumbers: true
  }
}
```
## 第3章 部署

1. 选择服务器

服务器有免费和收费两种，各有优劣：
-  使用 [Github Pages](https://links.jianshu.com/go?to=https%3A%2F%2Fpages.github.com%2F) 

即 Github 提供的、用于搭建个人网站的静态站点托管服务。很多人用它搭建个人博客。这种方式的好处是免费、方便，坏处是速度可能会有些慢、不能被国内的搜索引擎收录。
-  云服务器

[阿里云](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.aliyun.com%2Fproduct%2Fecs%3Fspm%3D5176.12825654.h2v3icoap.14.3dbd2c4aoQlEuZ%26aly_as%3DVluIMqElN)、[腾讯云](https://links.jianshu.com/go?to=https%3A%2F%2Fcloud.tencent.com%2Fact%2Fcampus%3FfromSource%3Dgwzcw.3180759.3180759.3180759%26utm_medium%3Dcpc%26utm_id%3Dgwzcw.3180759.3180759.3180759)，好处是速度有保证、可以被搜索引擎收录。

2.  github创建仓库

- 登录 [github](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2F)
- 新建仓库一：仓库名称为：username.github.io （必须为github账户的username），负责显示网站内容。
- 新建仓库二，仓库名称名称随意，如myblog-demo，负责日常开发和新增内容，并通过 npm run deploy 命令，将代码发布到仓库一

3. 关联本地项目与github仓库

```shell
// 进入demo文件夹
cd myblog
// git初始化
git init
// 关联github仓库
git remote add origin git@github.com:nan-gong/vuepress-demo.git
```
4. 新建部署文件

- 根目录下新建`deploy.sh`:
```bash
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:nan-gong/geminiaeu.github.io.git master

cd -
```

- 根目录新建README.md
 此文件为你的项目描述或用法，一般的git项目都会有此文件，和项目中的md文件无关。

5. git提交

```shell
// 提交到暂存区
git add .
// 提交到本地仓库
git commit -m '基本搭建完毕'
// push到github仓库
git push --set-upstream origin master
```

6.  新建deploy指令并执行

package.json 文件夹中添加发布命令：

```json
"scripts": {
  "deploy": "bash deploy.sh"
}
npm run deploy
```

7.  发布成功！

查看自己的博客域名：https://geminiaeu.github.io/
 这样所有的人都能访问到该博客了