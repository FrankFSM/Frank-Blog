module.exports = {
    port: 8082,
    base: '/Frank-Blog-Dist/',
    title: "Frank's Blog",
    description: '让总结成为习惯',
    head: [
    	['link', { rel: 'icon', href: '/images/logo.png' }]
    ],
    markdown: {
        lineNumbers: true,  // 代码显示行号
    },
    themeConfig: {
        nav: [
            { text:'首页', link: '/'},
            {
                text: '博文',
                items: [
                    { text: 'Python', link: '/python/' },
                    { text: 'Golang', link: '/golang/' },
                    { text: 'Web', link: '/web/' }
                ]
            },
            { text:'关于', link: '/about/'},
            { text: 'Github', link: 'https://www.github.com/meizhaohui' }
        ],
        sidebar: {
            '/python/': [
                {
                    title: 'Python基础知识',
                    collapsable: false,  // 是否可折叠，默认可折叠true
                    children: [
                        "python1",
                        "python2",
                        "python3"
                    ]
                },
                {
                    title: 'Python Web',
                    collapsable: false,
                    children: [
                        "python4",
                        "python5",
                        "python6"
                    ]
                },
            ],
            '/golang/': [
                "",
                "golang1",
                "golang2",
                "golang3"
            ],
            '/web/': [
                "",
                "web1"
            ],
        },
        sidebarDepth: 2, // 侧边栏显示深度，默认为1，即显示一级标题
    },
    plugins: [
	'@vuepress/back-to-top',
        '@vuepress/medium-zoom'
    ]
}
