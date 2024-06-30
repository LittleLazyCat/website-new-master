<template>
  <main
    class="articleComp wow animate__fadeInUp"
    @click="goArticlePage(item.id, item.title, item.time)"
    v-for="(item, index) in articleList"
    :key="index"
  >
    <!-- 实现了左右交叉排列 -->
    <div v-show="index % 2 === 0 ? false : true" class="img">
      <img v-lazy="item.imgSrc" alt="" />
    </div>

    <div class="content">
      <p class="time">发布时间:{{ item.time }}</p>
      <h2 class="title">{{ item.title }}</h2>
      <div class="desc">{{ item.simpleDesc }}</div>
      <div class="tag-list">
        <span
          class="tag-item"
          v-for="(tagItem, index) in item.tagList"
          :key="index"
          >{{ tagItem }}</span
        >
      </div>
    </div>

    <div v-show="index % 2 === 0 ? true : false" class="img">
      <!-- <img :src="item.imgSrc" alt=""> -->
      <img v-lazy="item.imgSrc" alt="" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { articlePreList } from "@/data/articleList";
import { useRoute, useRouter } from "vue-router";
import WOW from "wow.js";
const route = useRoute();
const router = useRouter();


// 测试提交




onMounted(() => {
  new WOW({
    boxClass: "wow",
    animateClass: "animate__animated",
  }).init();
});

const articleList = reactive<articlePreObj[]>([]); // 这种需要自定义类型
articleList.push(...articlePreList);

const goArticlePage = (id: number, title: string, time: string) => {
  // query 和 paramas 传参都是存放再对象中去
  router.push({ name: "ArticlePage", query: { id, title, time } });
};
</script>

<style lang="scss" scoped>
.articleComp {
  display: inline-block;
  width: 780px;
  height: 300px;
  overflow: hidden;
  // border: 1px black solid;
  box-shadow: 0 1px 20px -6px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  border-radius: 25px;
  margin-bottom: 30px;
  cursor: pointer;

  // a {
  //   color: black;
  // }

  .content {
    float: left;
    width: 50%;
    height: 100%;
    padding: 20px 20px 20px 30px;
    position: relative;

    .time {
      font-size: 14px;
      color: #797979;
      margin-bottom: 10px;
    }

    .title {
      font-size: 1.5em;
      margin: 23px 0;
    }

    .desc {
      line-height: 1.2;
    }

    .tag-list {
      position: absolute;
      height: 24px;
      left: 30px;
      bottom: 50px;
      line-height: 24px;

      .tag-item {
        display: inline-block;
        width: 70px;
        text-align: center;
      }
    }
  }

  .img {
    float: left;
    width: 50%;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
      transition: all 0.8s;
    }

    img:hover {
      transform: scale(1.2);
    }
  }
}

.articleComp:hover {
  box-shadow: 0 5px 10px 5px rgba(110, 110, 110, 0.4);
}
</style>
@/data/articleList
