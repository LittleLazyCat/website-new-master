<template>
  <!-- <div class="Loading" v-if="isLoading">
    <LoadingComp></LoadingComp>
  </div> -->

  <div id="layoutView">
    <!-- 返回顶部的组件 -->
    <ToTop
      :scrollTop="scrollTop"
      :scrollHeight="scrollHeight"
      :clientHeight="clientHeight"
    ></ToTop>

    <!-- 公共的头部 -->
    <!-- 根据头部在不同的界面 判断设置不同的背景颜色 -->
    <!-- 注册的组件 不可以添加类名 -->
    <div id="paddingTop">
      <transition name="header-fade">
        <Header
          v-if="isShowHeader"
          :style="{ backgroundColor: headerBgColor }"
        ></Header>
      </transition>
    </div>

    <RouterView></RouterView>

    <!-- 公共的底部 -->
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import ToTop from "@/components/ToTop.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
// import LoadingComp from '@/components/LoadingComp.vue';
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

let isLoading = ref<boolean>(true);

let isShowHeader = ref(true);
let oldScrollTop = ref(0);
let scrollTop = ref(0);
let scrollHeight = ref(0);
let clientHeight = ref(0);

/**
 * 使用computed 监视 headerBgColor 的变换
 */
const route = useRoute();
const headerBgColor = computed(() => {
  return route.meta.headerBgColor;
});

/**
 * 设置 下滑到一定程度 头部就不出现了
 */
const showHeader = () => {
  let scrollTop2 = document.documentElement.scrollTop;
  scrollTop.value = scrollTop2;
  // console.log('当前界面的卷入高度', Math.floor(scrollTop), 'isShowHeader:', isShowHeader);
  isShowHeader.value = scrollTop.value > 100 ? false : true;
  // currentComp = scrollTop > 100 ? null : Header;

  // 根据 新老页面卷入距离的差值, 进行计算
  let scrollStep: number = scrollTop.value - oldScrollTop.value;
  oldScrollTop.value = scrollTop.value;
  if (scrollStep <= 0) {
    // 当向上滚动时, 出现header
    isShowHeader.value = true;
    // currentComp = Header
    let header_color = "rgb(73,74,77)";
    if (scrollTop.value > 650) {
      // setHeaderBgColor(header_color)
    }
    if (scrollTop.value < 700) {
      // if ($route.path == '/WebsitHome/web-navigation') {
      // setHeaderBgColor(header_color)
      // return
    }
    // setHeaderBgColor('')
  }
};

onMounted(() => {
  window.addEventListener("scroll", showHeader);
  scrollHeight.value = document.documentElement.scrollHeight;
  clientHeight.value = document.documentElement.clientHeight;

  setTimeout(() => {
    isLoading.value = false;
  }, 2000);

  console.log("layout onMounted");
});
</script>

<style scoped lang="scss">
/* 整体 稍微黑色一点 rgba(0, 0, 0, 0.15)  */
// #layoutView {
  // background-color: var(--header--bgColor);
  // height: 1800px;
// }

/* hender 被固定定位了, 脱离了文档流, 需要界面内容的top65px 去占位置 */
#paddingTop {
  padding-top: 65px;
}

// .header-fade-enter-active,
// .header-fade-leave-active {
//   transition: all 0.3s ease-in;
// }

// .header-fade-enter,
// .header-fade-leave-to {
//   opacity: 0;
// }

.header-fade-enter-active,
.header-fade-leave-active {
  transition: all 0.3s ease-in;
}

.header-fade-enter-from,
.header-fade-leave-to {
  opacity: 0;
}
</style>
