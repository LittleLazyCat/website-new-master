import "animate.css";
import "@/assets/font/font.css";

import "@/css/reset.css";
import "@/css/common.css";
import "@/css/color.css";

// 代码高亮主题选一个即可
import "highlight.js/styles/atom-one-dark.css"; /*黑色主题*/

// 引入vue3 可以使用的插件
import hljsVuePlugin from "@highlightjs/vue-plugin";

// 只引入一种js语言的语法, 不全部引入
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

// 引入懒加载组件
import lazyPlugin from "vue3-lazy";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// 使用hljs插件
app.use(hljsVuePlugin);

// 使用懒加载组件:  img标签前使用 v-lazy 代替 :src
app.use(lazyPlugin, {
  loading: new URL("./assets/img/loading.png", import.meta.url).href, // 图片加载时默认图片
  error: new URL("./assets/img/error-loading.png", import.meta.url).href, // 图片加载失败时默认图片
});

/**
 * 自定义指令:全局高亮代码
 */
app.directive("highlight", (el: any) => {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach((block: HTMLElement) => {
    hljs.highlightBlock(block);
  });
});

// app.directive('red', {
//   mounted(el) {
//     el.style.color = 'red';
//   },
// });

app.use(createPinia());
app.use(router);
app.mount("#app");
