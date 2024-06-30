import { defineStore } from "pinia";

export const useBgcImgStore = defineStore("BgcImg", () => {
  // 背景图: 竟然是一个 string 类型
  // 弄成默认图片
  const BgcImg = new URL("../assets/home-img.jpg", import.meta.url).href;

  // 转换为网上的接口

  // 总体 return 出去
  return { BgcImg };
});
