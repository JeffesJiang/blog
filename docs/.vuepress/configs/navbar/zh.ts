import type {NavbarConfig} from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {text: '指南', link: '/guide/'},
  {text: '前端', link: '/frontEnd/'},
  {text: '算法', link: '/algorithm/'},
  {
    text: 'GIS',
    children: [
      {text: 'mapbox', link: '/gis/mapbox.md'},
    ]
  },
  {text: 'Webgl', link: '/webgl/'}
]
