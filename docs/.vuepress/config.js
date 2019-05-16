module.exports = {
    title: 'NinJa',
    description: '时间太短，指缝太宽',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/icon.png' }], 
    ],
    base: '/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav: [
            {
                text: '介绍',
                link: '/intro/'
            },
            {
                text: '总览',
                items: [
                    { text: '小程序', link: '/miniprogram/' },
                    { text: 'Vue', link: '/vue/'}
                ]
            }
        ],
        sidebar: {
            '/miniprogram/': [
                ['/miniprogram/', '小程序'],
            ],
            '/vue/': [
                ['/vue/', '待施工'],
            ],
        },
        sidebarDepth: 2,
    }
}