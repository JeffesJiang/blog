import type {NavbarConfig} from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {text: '指南', link: '/guide/'},
  {
    text: '前端', link: '/front-end/',
    children: [
      {
        text: '入门',
        link: '/front-end/',
      },
      {
        text: 'JS',
        children: [
          {text: 'js基础', link: '/front-end/js/base.md'},
          {text: 'js进阶', link: '/front-end/js/advanced.md'}
        ]
      },
      {
        text: 'TS',
        children: [
          {text: 'ts基础', link: '/front-end/ts/base.md'},
          {text: 'ts进阶', link: '/front-end/ts/advanced.md'}
        ]
      }
    ]
  },
  {text: '算法', link: '/algorithm/'},
  {
    text: 'GIS',
    children: [
      {text: 'mapbox', link: '/gis/mapbox.md'},
    ]
  },
  {text: 'Webgl', link: '/webgl/'},
  {text: 'Docker', link: '/docker/'}
]
