import type {SidebarConfig} from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/guide/': [
    {
      text: '指南',
      link: '/guide/',
    }
  ],
  '/gis/': [
    {
      text: 'GIS',
      children: [
        {
          text: '介绍',
          link: '/gis/',
        },
        {
          text: 'mapbox',
          link: '/gis/mapbox.md',
        },
      ]
    }
  ],
  '/front-end/': [
    {
      text: '入门',
      link: '/front-end/',
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
        {
          text: 'TS基础',
          link: '/front-end/ts/base.md',
        },
        {
          text: 'TS进阶',
          link: '/front-end/ts/advanced.md',
        },
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
