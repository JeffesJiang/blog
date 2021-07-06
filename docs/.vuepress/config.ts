import {defineUserConfig} from 'vuepress';
import type {DefaultThemeOptions} from 'vuepress';

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh',
  title: '姜金甫的个人网站',
  description: '姜金甫的个人网站，前端学习，算法学习，GIS，Mapbox学习，Webgl,three.js',

  themeConfig: {
    navbar: [
      {text: '指南', link: '/guide/'},
      {text: '前端', link: '/frontEnd/'},
      {text: '算法', link: '/algorithm/'},
      {text: 'GIS', link: '/gis/'},
      {text: 'Webgl', link: '/webgl/'},
    ]
  }
});
