const nav = require('./config/nav/')
const sidebar = require('./config/sidebar/')
module.exports = {
    title: 'xx博客',
    description: '欢迎来到我的博客',
    dest: './dist',
    port: '7777',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.jpg' }]
    ],
    // markdown: {
    //     lineNumbers: true
    // },
    themeConfig: {
        logo: '/img/logo.jpg',
        nav,
        // sidebar
    },
    plugins: {
        "vuepress-plugin-auto-sidebar": {}
    }
}