import { defineConfig } from 'vitepress'
import { en } from './en'
import { zh } from './zh'

export default defineConfig({
  title: 'EasyYapi',

  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/images/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#5f67ff' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:site_name', content: 'EasyYapi' }],
    ['meta', { name: 'og:title', content: 'EasyYapi - Simplifies API Development' }],
    ['meta', { name: 'og:description', content: 'IntelliJ IDEA plugin for generating API documentation from Java/Kotlin code' }],
  ],

  locales: {
    root: { label: 'English', ...en },
    zh: { label: '简体中文', ...zh },
  },
})
