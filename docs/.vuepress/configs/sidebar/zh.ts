import type {SidebarConfig} from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/guide/': [
    {
      text: '指南',
      link: '/guide/',
    }
  ],
  '/front-end/': [
    {
      text: '入门',
      children: [
        '/front-end/introduction'
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
    }
  ],
  '/network/': [
    {
      text: '网络',
      link: '/network/',
    }
  ],
  '/gis/': [
    {
      text: 'GIS',
      children: [
        '/gis/',
        '/gis/mapbox.md'
      ]
    }
  ],
  '/docker/': [
    {
      text: 'Docker',
      link: '/docker/'
    }
  ]
}
