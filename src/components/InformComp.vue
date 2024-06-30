<template>
  <main class="informComp">
    <!-- 使用伪元素 设置 喇叭 -->
    <i class="bell fa fa-bell-o" aria-hidden="true"></i>
    <p class="info-content">
      项目源码: https://gitee.com/tang-0205/website-new <br>
      上线地址: www.tang0205.top <br>
      演示地址: https://tang-0205.gitee.io/website-new (速度快)

    <p class="inform-desc">个人租赁的阿里云ECS访问较慢,建议使用演示地址进行访问</p>
    </p>

  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => { })

</script>

<style lang='scss' scoped>
.informComp {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 780px;
  height: 130px;
  border: 1px dashed #ddd;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 15px;

  .bell {
    width: 50px;
    height: 20px;
    color: orange;
    text-align: center;
    font-size: 22px;
    animation: scale 0.8s infinite;
  }

  .info-content {
    font-size: 16px;
    margin-left: 20px;
    line-height: 1.5; // 行高 也是 行间距， 不带单位就是当前字体大小的倍数

    .inform-desc {
      font-size: 12px;
      margin-top: 5px;
      color: #989595;
    }
  }
}


@keyframes scale {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>