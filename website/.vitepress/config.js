import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'The Book of Elon 中文版',
  base: '/book-of-elon-zh/',
  themeConfig: {
    nav: [{ text: '首页', link: '/' }],
    sidebar: [
      { text: '前言', items: [{ text: '关于本书', link: '/notes' }] },
      { text: 'PART I', items: [{ text: '追求目标', link: '/part1' }] },
      { text: 'PART II', items: [{ text: '极限工作', link: '/part2' }] },
      { text: 'PART III', items: [{ text: 'Tesla', link: '/tesla' }, { text: 'SpaceX', link: '/spacex' }] },
      { text: 'PART IV', items: [{ text: '为了人类', link: '/part4' }] },
      { text: '附录', items: [{ text: '69 条方法', link: '/methods' }, { text: '时间线', link: '/timeline' }] }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/bugcodes/book-of-elon-zh' }]
  }
})
