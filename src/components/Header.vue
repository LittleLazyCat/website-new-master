<template>
  <div class="header" id="header">
    <div class="header-left">
      <h2>生活倒影</h2>
    </div>
    <div class="header-right">
      <ul class="nav-list">
        <!-- 直接定向路由 不用使用 router-link 了 -->
        <li
          class="nav-item"
          @click="$router.push({ path: navAddress[index] })"
          v-for="(nav, index) in navList"
          :key="index"
        >
          {{ navIcon[index] }} <span>{{ nav }}</span>
        </li>
        <li class="nav-item">
          <div class="avatar">
            <img src="@/assets/img/avatar.png" alt="" />

            <!-- 根据绝对定位去判断 hover时 改变display即可 -->
            <div class="user-login" @click="$router.push({ path: '/login' })">
              <i class="fa fa-sign-in"> &nbsp;登陆</i>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";

let navList = reactive(["首页", "my love", "百宝箱", "树洞", "关于作者"]);
let navIcon = reactive(["🏡", "💋", "🧰 ", "💬", "🐟"]);
let navAddress = reactive(["/", "#", "/navigation", "#", "#"]);

onMounted(() => {});
</script>

<style scoped src="@/css/header.css"></style>
<style lang="scss">
#header {
  position: relative;
  /* 头部的层级需要高一点 否则主页会挡到 hover的login */
  z-index: 100;
}
</style>
