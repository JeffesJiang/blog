import type {NavbarConfig} from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {text: '指南', link: '/guide/'},
  {
    text: '前端', link: '/front-end/',
    children: [
      {
        text: '入门',
        children: [
          '/front-end/introduction/'
        ]
      },
      {
        text: 'HTML',
        children: [
          '/front-end/html',
        ]
      },
      {
        text: 'CSS',
        children: [
          '/front-end/css',
        ]
      },
      {
        text: 'JS',
        children: [
          '/front-end/js/base.md',
          '/front-end/js/advanced.md'
        ]
      },
      {
        text: 'TS',
        children: [
          '/front-end/ts/base.md',
          '/front-end/ts/advanced.md'
        ]
      },
      {
        text: 'Vue',
        children: [
          '/front-end/vue/'
        ]
      },
      {
        text: '性能',
        children: [
          '/front-end/performance/'
        ]
      }
    ]
  },
  {text: '网络', link: '/network/'},
  {text: '算法', link: '/algorithm/'},
  {
    text: 'GIS',
    children: [
      '/gis/',
      '/gis/mapbox.md'
    ]
  },
  {text: 'Webgl', link: '/webgl/'},
  {text: 'Docker', link: '/docker/'}
]
