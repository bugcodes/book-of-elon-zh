import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'The Book of Elon 中文版',
  description: '埃隆·马斯克智慧语录 - 中英对照版',
  base: '/book-of-elon-zh/',
  lang: 'zh-CN',
  themeConfig: {
    logo: '🚀',
    nav: [
      { text: '首页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/bugcodes/book-of-elon-zh' }
    ],
    sidebar: [
      {
        text: '前言',
        items: [
          { text: '关于本书', link: '/front-matter/notes' },
          { text: 'Naval 序言', link: '/front-matter/foreword' },
          { text: 'Eric 欢迎词', link: '/front-matter/welcome' }
        ]
      },
      {
        text: 'PART I: 追求目标',
        items: [
          { text: '过有目标的生活', link: '/chapters/part1-purpose' }
        ]
      },
      {
        text: 'PART II: 极限硬核工作',
        items: [
          { text: '成功所需的条件', link: '/chapters/part2-work' }
        ]
      },
      {
        text: 'PART III: 创建公司',
        items: [
          { text: '建造特斯拉', link: '/chapters/part3-tesla' },
          { text: '建造 SpaceX', link: '/chapters/part3-spacex' }
        ]
      },
      {
        text: 'PART IV: 为了人类',
        items: [
          { text: '建设我们的未来', link: '/chapters/part4-humanity' }
        ]
      },
      {
        text: '附录',
        items: [
          { text: '69 条核心方法', link: '/bonus/methods' },
          { text: '时间线', link: '/bonus/timeline' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/bugcodes/book-of-elon-zh' }
    ],
    footer: {
      message: '基于 Eric Jorgenson 原著翻译 | CC BY-NC-SA 4.0',
      copyright: 'Copyright © 2026 赵小帅'
    }
  },
  markdown: {
    lineNumbers: false
  }
})
