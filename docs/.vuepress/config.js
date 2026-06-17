import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { getDirname, path } from 'vuepress/utils'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import { prismjsPlugin } from '@vuepress/plugin-prismjs';

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  locales: {
    '/': {
      lang: 'en-US',
      title: 'YouTube.js',
      description: 'A JavaScript client for YouTube\'s private API, known as InnerTube.',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'YouTube.js',
      description: 'YouTube 私有 API（InnerTube）的 JavaScript 客户端',
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/images/favicon/favicon-32x32.png' }],
    ['link', { rel: 'icon', href: '/images/favicon/favicon-16x16.png' }],
    ['link', { rel: 'shortcut icon', href: '/images/favicon/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#2b2b2b' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { property: 'og:title', content: 'YouTube.js Docs' }],
    ['meta', { property: 'og:description', content: "A JavaScript client for YouTube's private API, known as InnerTube." }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://ytjs.dev' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:image', content: '/images/logo.png' }],
  ],
  clientConfigFile: path.resolve(__dirname, 'client.js'),
  theme: defaultTheme({
    docsRepo: 'https://github.com/LuanRT/ytjs-docs',
    docsBranch: 'main',
    docsDir: 'docs',
    contributors: false,
    repo: 'https://github.com/LuanRT/YouTube.js',
    locales: {
      '/': {
        selectLanguageName: 'English',
        editLinkText: 'Edit this page',
        navbar: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'Discord',
            link: 'https://discord.gg/syDu7Yks54'
          },
          {
            text: '❤️ Sponsor',
            link: 'https://github.com/sponsors/LuanRT',
          },
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                {
                  link: '/guide/',
                  text: 'Introduction'
                },
                {
                  link: '/guide/getting-started',
                  text: 'Getting Started'
                },
                {
                  link: '/guide/browser-usage',
                  text: 'Browser Usage'
                },
                {
                  link: '/guide/caching',
                  text: 'Caching'
                },
                {
                  link: '/guide/proxies',
                  text: 'Proxies'
                },
                {
                  link: '/guide/authentication',
                  text: 'Authentication'
                },
                {
                  link: '/guide/advanced-usage',
                  text: 'Advanced Usage'
                },
                {
                  link: '/guide/troubleshooting',
                  text: 'Troubleshooting'
                },
                {
                  link: '/guide/faq',
                  text: 'FAQ'
                },
              ]
            }
          ],
          '/api/': [
          ],
          '/googlevideo/': [
          ]
        }
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        editLinkText: '编辑此页',
        navbar: [
          {
            text: '指南',
            link: '/zh/guide/'
          },
          {
            text: 'Discord',
            link: 'https://discord.gg/syDu7Yks54'
          },
          {
            text: '❤️ 赞助',
            link: 'https://github.com/sponsors/LuanRT',
          },
        ],
        sidebar: {
          '/zh/guide/': [
            {
              title: '指南',
              collapsable: false,
              children: [
                {
                  link: '/zh/guide/',
                  text: '介绍'
                },
                {
                  link: '/zh/guide/getting-started',
                  text: '快速开始'
                },
                {
                  link: '/zh/guide/browser-usage',
                  text: '浏览器使用'
                },
                {
                  link: '/zh/guide/caching',
                  text: '缓存'
                },
                {
                  link: '/zh/guide/proxies',
                  text: '代理'
                },
                {
                  link: '/zh/guide/authentication',
                  text: '身份验证'
                },
                {
                  link: '/zh/guide/advanced-usage',
                  text: '高级用法'
                },
                {
                  link: '/zh/guide/troubleshooting',
                  text: '故障排除'
                },
                {
                  link: '/zh/guide/faq',
                  text: '常见问题'
                },
              ]
            }
          ],
          '/zh/api/': [
          ],
          '/zh/googlevideo/': [
          ]
        }
      }
    },
    colorModeSwitch: true,
  }),
  plugins: [
    prismjsPlugin({
      theme: 'one-dark',
    }),
    sitemapPlugin({
      hostname: 'https://ytjs.dev',
      exclude: ['/404.html'],
    }),
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
  bundler: viteBundler(),
})
