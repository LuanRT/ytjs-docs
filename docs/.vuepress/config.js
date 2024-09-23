import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
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
    ['meta', { property: 'og:url', content: 'https://ytjs.thatsciencephile.com' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:image', content: '/images/logo.png' }],
  ],
  title: 'YouTube.js',
  description: 'A JavaScript client for YouTube\'s private API, known as InnerTube.',

  theme: defaultTheme({
    docsRepo: 'https://github.com/LuanRT/ytjs-docs',
    docsBranch: 'main',
    docsDir: 'docs',
    repo: 'https://github.com/LuanRT/YouTube.js',
    navbar: [
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/syDu7Yks54'
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
    }
  }),

  bundler: viteBundler(),
})
