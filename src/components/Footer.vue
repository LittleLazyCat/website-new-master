<template>
  <div class="footer">
    <main class="content">
      <div class="title">{{ footerTitle }}</div>
      <div class="desc">豫ICP备2023024977</div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

let footerTitle = ref<string>("终身学习,无限进步");


// 测试

onMounted(() => {});
</script>

<style lang="scss" scoped>
.footer {
  background-color: #fff;

  .content {
    background-color: pink;
    text-align: center;
    padding: 6px 0;
    border-radius: 30px 30px 0 0;
    // 第一个参数是 渐变色的方向: 100deg 和 to right 一样
    // background-image: linear-gradient(to right, #3498db, #27ae60, #9b59b6, #3498db, #f39c12, #d35400);
    background-image: linear-gradient(
      100deg,
      #f39c12,
      #f1c40f,
      #e74c3c,
      #16a085,
      #27ae60,
      #2980b9
    );
    background-size: 200%;
    // 添加动画: 最后一个参数循环
    animation: bganimation 7s infinite;

    .title {
      font-size: 16px;
      color: var(--main--bgcColor);
      padding-bottom: 10px;
    }

    .desc {
    }
  }

  // 要想使用循环 infinite， 头尾的需要一至， 也就是0%的参数 和100%的参数需要一至
  @keyframes bganimation {
    0% {
      background-position: 0 50%; // 和100%的参数一至
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
}
</style>
