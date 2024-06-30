<template>
  <div class="to-Top" ref="toTopEl" @click="toTop"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, watchEffect } from "vue";

/**
 * 获取主界面中穿过的参数
 */
const props = defineProps({
  scrollTop: {
    type: Number,
  },
  scrollHeight: {
    type: Number,
  },
  clientHeight: {
    type: Number,
  },
});

// window.innerHeight 浏览器视口的高度
let bit = ref(0);
let toTopEl = ref(); // 获取DOM  只需要ref的变量名 和 标签中ref属性名相同

// 监视父传子的参数变化,  也相当于在top界面监视页面滚动了, 只不过使用的是layout的界面 scrollTop
const toTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

const showToTop = () => {
  let top = Math.floor(-830 * (1 - bit.value));
  if (top > -90) {
    top = -90;
  }
  toTopEl.value.style.cssText = `top:${top}px`;
};

onMounted(() => {
  /**
   * 监视
   */
  watch(
    () => props.scrollTop,
    (newVal, oldVal) => {
      showToTop();
      // 提示错误，调试器不报错， 也不影响运行。
      bit.value = (oldVal / (props.scrollHeight - props.clientHeight)).toFixed(
        2,
      );
    },
    {
      immediate: true,
    },
  );
});
</script>

<style scoped lang="scss">
.to-Top {
  width: 70px;
  height: 900px;
  position: fixed;
  right: 70px;
  top: -830px;
  transform: scale(0.85);
  background: url(@/assets/img/top.jpg) no-repeat center;
  // background: var(--toTop) no-repeat center;
  z-index: 10000;
  // transition: all 0.4s ease-in-out;
  cursor: pointer;
}
</style>
