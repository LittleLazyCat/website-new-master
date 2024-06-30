<template>
  <div class="thrssd-box">
    <section>
      <div><img src="@/components/3d-box/imgs/1.jpg" alt="" /></div>
      <div><img src="@/components/3d-box/imgs/2.jpg" alt="" /></div>
      <div><img src="@/components/3d-box/imgs/3.jpg" alt="" /></div>
      <div><img src="@/components/3d-box/imgs/4.jpg" alt="" /></div>
      <div><img src="@/components/3d-box/imgs/5.jpg" alt="" /></div>
      <div><img src="@/components/3d-box/imgs/6.jpg" alt="" /></div>

      <div><img src="@/components/3d-box/imgs/1.jpg" alt="" /></div>
      <div><img src="@/components/3d-box/imgs/2.jpg" alt="" /></div>
      <div><img src="@/components/3d-box/imgs/3.jpg" alt="" /></div>
      <div><img src="@/components/3d-box/imgs/4.jpg" alt="" /></div>
      <div><img src="@/components/3d-box/imgs/5.jpg" alt="" /></div>
      <div><img src="@/components/3d-box/imgs/6.jpg" alt="" /></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {});
</script>

<style scoped>
* {
  /* 初始化 取消页面的内外边距 */
  padding: 0;
  margin: 0;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  /* 高度始终充满浏览器视口 */
  height: 100vh;
  background-color: #000;
  /* 视距 ?? : 增加盒子的立体感 */
  perspective: 1000px;
}

section {
  width: 150px;
  height: 150px;
  /* 定位 */
  position: relative;
  /* 子元素保留其3D位置 */
  /* 之后就可以使用transform中的 translate/rotate分别选择XYZ轴去移动和旋转。 */
  transform-style: preserve-3d;
  /* direction fill-mode 方向 和 设计模式 */
  animation: rotate 6s linear infinite;
}

section div {
  /* 绝对定位 div */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* 防止 透明的背景图片 */
  background-color: #fff;
  transition: all 1s;
}

section div img {
  width: 100%;
  height: 100%;
}

/* 移动图片是控制div的移动 */

/* 向外移动全都是 Z轴的一定, 元素都转换了方向, 所以都移动200px 移动的方向也不同. */
section div:nth-child(1) {
  /* 向前一定 75px */
  transform: translateZ(75px);
}

section:hover div:nth-child(1) {
  transform: translateZ(200px);
}

section div:nth-child(2) {
  /* 自身旋转180度, 此时自身的Z轴的方向也变了, 所以Z轴移动75px 相当于向后移动75px */
  transform: rotateX(-180deg) translateZ(75px);
}

section:hover div:nth-child(2) {
  transform: rotateX(-180deg) translateZ(200px);
}

section div:nth-child(3) {
  transform: rotateX(90deg) translateZ(75px);
}

section:hover div:nth-child(3) {
  transform: rotateX(90deg) translateZ(200px);
}

section div:nth-child(4) {
  transform: rotateX(-90deg) translateZ(75px);
}

section:hover div:nth-child(4) {
  transform: rotateX(-90deg) translateZ(200px);
}

section div:nth-child(5) {
  transform: rotateY(90deg) translateZ(75px);
}

section:hover div:nth-child(5) {
  transform: rotateY(90deg) translateZ(200px);
}

section div:nth-child(6) {
  transform: rotateY(-90deg) translateZ(75px);
}

section:hover div:nth-child(6) {
  transform: rotateY(-90deg) translateZ(200px);
}

/* 重叠的部分  不用加 hover效果 */
section div:nth-child(7) {
  transform: translateZ(75px);
}

section div:nth-child(8) {
  transform: rotateX(-180deg) translateZ(75px);
}

section div:nth-child(9) {
  transform: rotateX(90deg) translateZ(75px);
}

section div:nth-child(10) {
  transform: rotateX(-90deg) translateZ(75px);
}

section div:nth-child(11) {
  transform: rotateY(90deg) translateZ(75px);
}

section div:nth-child(12) {
  transform: rotateY(-90deg) translateZ(75px);
}

@keyframes rotate {
  0% {
    transform: rotateY(0) rotateX(0);
  }

  100% {
    transform: rotateY(360deg) rotateX(360deg);
  }
}
</style>
