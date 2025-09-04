import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Muhammad Hanif',
  description: 'Vite & Vue powered static site generator.',
  base: '/website/',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/about' },

       /*{
         text: 'Dropdown Menu',
         items: [
           { text: 'Item A', link: '/item-1' },
           { text: 'Item B', link: '/item-2' },
           { text: 'Item C', link: '/item-3' },
         ],
       },*/

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'About Me', link: '/about' },
          // ...
        ],
      },
    ],
    socialLinks: [
      { icon: 'github',  link: 'https://github.com/ethanxhf' },
      { icon: 'telegram', link: 'https://t.me/ethanxhf' }
    ]
  },
});
