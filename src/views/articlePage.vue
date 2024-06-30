<template>
  <div class="articlePage">
    <div class="wow animate__fadeInDown">
      <div class="top-img">
        <img src="../assets/home-img.jpg" alt="" />
      </div>
      <div class="article-desc">
        <div class="desc-c">
          <div class="title">{{ route.query.title }}</div>
          <div class="tag">
            <div class="time">{{ route.query.time }}</div>
          </div>
        </div>
      </div>
      <!-- 占位div -->
      <!-- 因为 背景图使用了定位，定到了header下面，正常的文档流被改变，就需要占位把正常的文档流顶下来 -->
      <div class="placeholder"></div>
    </div>

    <div class="content wow animate__fadeInUp">
      <div class="content-c">
        <div class="dashed">
          <div class="svg">
            <img src="../assets/img/article-little-icon.svg" alt="" />
          </div>
          &nbsp;文章
        </div>

        <!-- 此处使用动态组件进行控制 -->
        <component :is="currentComp"></component>
        <!-- <ArticleOneComp></ArticleOneComp> -->
        <!-- <ArticleTwoComp></ArticleTwoComp> -->
        <!-- <ArticleThreeComp></ArticleThreeComp> -->
        <!-- <ArticleFourComp></ArticleFourComp> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 加载组件
import ArticleOneComp from "@/components/articles/ArticleOneComp.vue";
import ArticleTwoComp from "@/components/articles/ArticleTwoComp.vue";
import ArticleThreeComp from "@/components/articles/ArticleThreeComp.vue";
import ArticleFourComp from "@/components/articles/ArticleFourComp.vue";
import WOW from "wow.js";

import { onMounted, shallowRef, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const currentComp = shallowRef<any>(ArticleOneComp);
let articleId = ref<number>();
articleId.value = Number(route.query.id);
// 根据点击不同的文章, 传过来不同的id, 进而判断加载哪一个组件
switch (articleId.value) {
  case 1:
    currentComp.value = ArticleOneComp;
    // currentComp.value = () => import('@/components/articles/ArticleOneComp.vue')
    // import('@/components/articles/ArticleOneComp.vue').then(comp => {
    //   currentComp.value = comp;
    // });
    break;
  case 2:
    currentComp.value = ArticleTwoComp;
    // currentComp.value = () => import('@/components/articles/ArticleTwoComp.vue')
    // import('@/components/articles/ArticleTwoComp.vue').then(comp => {
    //   currentComp.value = comp;
    // });
    break;
  case 3:
    currentComp.value = ArticleThreeComp;
    // currentComp.value = () => import('@/components/articles/ArticleThreeComp.vue')
    // import('@/components/articles/ArticleThreeComp.vue').then(comp => {
    //   currentComp.value = comp;
    // });
    break;
  case 4:
    currentComp.value = ArticleFourComp;
    // currentComp.value = () => import('@/components/articles/ArticleFourComp.vue')
    // import('@/components/articles/ArticleFourComp.vue').then(comp => {
    //   currentComp.value = comp;
    // });
    break;
}

console.log("route.query.id===>", route.query.id);

onMounted(() => {
  new WOW({
    boxClass: "wow",
    animateClass: "animate__animated",
  }).init();
});
</script>

<style lang="scss" scoped>
// % 相对于父元素的大小
// vh 和 vw 是相对于当前窗口的比值
.articlePage {
  position: relative;
  width: 100%;

  .top-img {
    position: absolute;
    top: -100px;
    width: 100%;
    height: 300px;
    overflow: hidden;
    z-index: -9999;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .article-desc {
    position: absolute;
    top: 100px;
    width: 100%;

    .desc-c {
      width: 1100px;
      margin: 0 auto;
      padding: 20px;

      .title {
        font-size: 28px;
        color: white;
        margin-bottom: 15px;
      }
    }
  }

  .placeholder {
    height: 200px;
  }

  .content {
    width: 100%;

    .content-c {
      width: 800px;
      margin: 0 auto;
    }

    .dashed {
      border-bottom: 1px dashed #313030;
      margin-top: 30px;
      margin-bottom: 10px;
      display: flex;
      text-align: center;
      line-height: 1.2;

      .svg {
        width: 20px;
        height: 25px;

        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
