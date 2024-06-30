<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import mouseAnimate from "@/utils/mouseAnimation";
import { onMounted } from "vue";
mouseAnimate();

onMounted(() => {
  console.log("App.vue ==>  oMounted");
  const LoadingEl = document.querySelector(".LoadingComp");

  // 删除前添加上类名
  setTimeout(() => {
    LoadingEl?.classList.add("LoadingComp-active");
    // 加上隐藏动画, 之后随便找个时候删除该loading标签即可
    setTimeout(() => {
      document.body.removeChild(LoadingEl!);
    }, 1000);
    // 加载2.2s 后出现首页内容
  }, 3000);
});
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
body {
  font-family: "Heavy";
}
</style>
