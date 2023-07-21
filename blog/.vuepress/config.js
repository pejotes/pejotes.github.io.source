module.exports = {
    title: 'Vue-deploy Example',
    theme: "@vuepress/theme-blog",
    base: "/pejotes.github.io/",
    plugins: [
    ],
    themeConfig: {

        dateFormat: 'YYYY-MM-DD',
 
        /**
         * Ref: https://vuepress-theme-blog.ulivz.com/#footer
         */
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/pejotes',
                }
            ],
            copyright: [{
                    text: 'Privacy Policy',
                    link: 'https://policies.google.com/privacy?hl=en-US',
                },
                {
                    text: 'MIT Licensed | Copyright © 2018-present Vue.js',
                    link: '',
                },
            ],
        },
        directories:[
          {
            id: 'post',
            dirname: '_posts',
            path: '/',
            itemPermalink: '/:year/:month/:day/:slug',
          },
          {
            id: 'writing',
            dirname: '_writings',
            path: '/',
            itemPermalink: '/:year/:month/:day/:slug',
          },
        ],
        /**
         * Ref: https://vuepress-theme-blog.ulivz.com/#sitemap
         */
        sitemap: {
            hostname: 'https://xxx.com/'
        },
        smoothScroll: true
    },
}
