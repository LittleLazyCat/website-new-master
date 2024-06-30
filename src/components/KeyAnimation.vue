<template>
  <div class="KeyAnimationPage">
    <div id="element"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import TypeIt from "typeit";
// 导入一言
// import { temp } from '@/data/aword'
// import { useAWordStore } from "@/stores/aWord";
// const aWordStore = useAWordStore()
// console.log('aWordStore.aWord==>', aWordStore.aWord);
// const keyWord = ref('')
// keyWord.value = temp

import axios from "axios";
function request(method: string, url: string, params?: any) {
  return axios({
    method,
    url,
    params,
  });
}

onMounted(() => {
  console.log("onMounted");

  async function getAWord() {
    /* 
      let method = "GET";
      let url = "https://api.wrdan.com/hitokoto";
      const res = await request(method, url);
    */
    
    const res:{data:{text:string}} = {data:{text:'为了去码头整点薯条吃。'}}

    // 存放进 pinia： 但是pinia再页面加载完成之后才会执行， 排在页面的
    // aWordStore.aWord = res.data.text
    localStorage.setItem("aWord", res.data.text);
    console.log(localStorage.getItem("aWord"));

    /**
     * 由于 请求总是慢于vue生命周期函数的执行， 而我们又需要在 onMounted 执行前获取数据
     * 所以 只能将该数据卸载 await 后面， 保证该参数再获取数据之后再执行
     */

    new TypeIt("#element", {
      // 提示的错误可以不管, 类型提示罢了,可以执行
      strings: localStorage.getItem("aWord"),
      speed: 100,
      deleteSpeed: 100,
      startDelay: 1800,
      // loop: true,
      cursorSpeed: 800,
      cursorColor: "color",
      waitUntilVisible: true, // 等到出现在视口里面再打印
    }).go();
  }

  getAWord();
});
</script>

<style lang="scss" scoped>
.KeyAnimationPage {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 25px;

  #element {
    height: 51px;
    line-height: 51px;
    text-align: center;
    font-size: 24px;
    color: rgb(247, 243, 243);
    letter-spacing: 1px;
  }
}
</style>
