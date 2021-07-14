import {defineUserConfig} from 'vuepress';
import type {DefaultThemeOptions} from 'vuepress';
import {navbar, sidebar} from './configs'

export default defineUserConfig<DefaultThemeOptions>({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '前端学习成长历程',
      description: '姜金甫的个人网站，前端学习，算法学习，GIS，Mapbox学习，Mapbox离线版本，Mapbox离线版本部署，Webgl,three.js',
    },
    '/en/': {
      lang: 'en-US',
      title: 'FRONT END LEARNING GROWTH PROCESS',
      description: '姜金甫的个人网站，前端学习，算法学习，GIS，Mapbox学习，Mapbox离线版本，Mapbox离线版本部署，Webgl,three.js',
    }
  },

  themeConfig: {
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',

        // navbar
        navbar: navbar.zh,

        // sidebar
        sidebar: sidebar.zh,

        repo: 'https://github.com/JeffesJiang/blog',
        editLink: false

      },
      '/en/': {
        selectLanguageName: 'English',
      }
    }
  }
});
