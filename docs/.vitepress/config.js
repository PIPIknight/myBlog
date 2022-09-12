/*
 * @Author: bin.wang 852881230@qq.com
 * @Date: 2022-09-12 18:18:03
 * @LastEditors: bin.wang 852881230@qq.com
 * @LastEditTime: 2022-09-12 21:02:58
 * @FilePath: \博客\docs\.vuepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  title: "PiPiShrimpsBlog", //站点标题
  description: "皮皮虾的博客", //mate标签description，多用于搜索引擎抓取摘要,
  lang: "zh-CN",
  themeConfig: {
    siteTitle: "PiPiShrimp",
    logo: "/logo.png",
    nav: [
      { text: "首页", link: "/guide/" },
      { text: "文章", link: "/articles/" },
      {
        text: "ThreeJS",
        items: [{ text: "Item A", link: "/item-1" }],
      },
    ],
    sidebar: {
      "/articles/": [
        {
          text: "我所不知道的JS",
          collapsible: true,
          collapsed: true,
          items: [{ text: "JS01", link: "/articles/myJS/JS20220912.md" }],
        },
        {
          text: "从头再来的css",
          collapsible: true,
          collapsed: true,
          items: [{ text: "css基本尺寸单位", link: "/articles/myCss/aboutPx.md" }],
        },
      ],
      // "/articles/myCss/": [
      //   {
      //     text: "从头再来的css",
      //     collapsible: true,
      //     collapsed: true,
      //     items: [{ text: "CSS01", link: "/articles/myCss/CSS20220912.md" }],
      //   },
      // ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/PIPIknight" },
      // { icon: "gitee", link: "https://gitee.com/" },
    ],
  },
};
