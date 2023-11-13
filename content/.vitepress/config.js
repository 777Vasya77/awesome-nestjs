import { defineConfig } from 'vitepress';

import sidebar from '../../sidebar.json';

export default defineConfig({
  lang: 'en-US',
  title: 'Awesome NestJS',
  description: 'A curated list of awesome things related to NestJS',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#ea2845' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#ea2845' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#fff' }],
    // Google Analytics
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-T5QN6235VV' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());

       gtag('config', 'G-T5QN6235VV');`
    ],
  ],
  base: '/',
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/777Vasya77/awesome-nestjs/edit/master/content/:path',
      text: 'Edit this page on GitHub'
    },
    logo: '/logo-icon.svg',
    search: {
      provider: 'local',
      options: {
        disableDetailedView: false,
        disableQueryPersistence: false,
      }
    },
    nav: [
      // { text: 'Contribute 💚', link: 'https://github.com/sponsors/777Vasya77' }
      { text: '#StandWithUkraine 🇺🇦', link: 'https://stand-with-ukraine.pp.ua/' }
    ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/777Vasya77/awesome-nestjs' }
    ],
    footer: {
      message: 'Maintained by Vasya Ponomarenko',
    },
  },

  sitemap: {
    hostname: 'https://awesome-nestjs.com',
    transformItems: (items) => {
      return items.map((item) => ({
        ...item,
        changefreq: 'monthly',
        priority: item.url === '' ? 1.0 : 0.8
      }))
    }
  }
});
