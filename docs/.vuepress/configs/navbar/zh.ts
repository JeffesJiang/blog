import type {NavbarConfig} from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {text: '指南', link: '/guide/'},
  {
    text: '前端', link: '/front-end/',
    children: [
      '/front-end/introduction/',
      '/front-end/html',
      '/front-end/css',
      '/front-end/js/base.md',
      '/front-end/js/advanced.md',
      '/front-end/ts/base.md',
      '/front-end/ts/advanced.md',
      '/front-end/vue/',
      '/front-end/performance/',
      '/front-end/interview/'
    ]
  },
  {text: '网络', link: '/network/'},
  {text: '算法', link: '/algorithm/'},
  {
    text: 'GIS',
    children: [
      '/gis/mapbox.md'
    ]
  },
  {text: 'Webgl', link: '/webgl/'},
  {text: 'Docker', link: '/docker/'}
]
