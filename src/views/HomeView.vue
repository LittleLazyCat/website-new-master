<template>
  <!-- 主页 : 没有头部和底部 -->
  <div id="WebHomeView">
    <!-- 切换夜间模式的按钮 -->
    <div class="night-switch">
      <!-- 使用的是单选按钮模拟 -->
      <input type="checkbox" id="night-switch" />
      <label class="switch" for="night-switch"><span></span></label>
    </div>

    <!-- 顶部大图 + 背景图 -->
    <BackgroundImgCom></BackgroundImgCom>

    <!-- 主题标语 -->
    <div class="theme-words">
      <div class="poem">{{ themeWords }}</div>
      <!-- 键入动画 -->
      <KeyAnimation></KeyAnimation>
      <!-- <div class="anima">显示打字区域</div> -->
    </div>

    <!-- 波浪线 -->
    <div class="sea-side">
      <div class="wave"></div>
      <div class="wave"></div>
      <i
        class="fa fa-angle-down arrow-down"
        @click="toNextPage('.content')"
      ></i>
    </div>
    <!-- 3D盒子 看板盒子 -->
    <div class="threeD-box">
      <!-- <threeDBox></threeDBox> -->
    </div>
    <!-- 版心区域 -->
    <main class="main">
      <div class="main-c">
        <!-- 侧边栏 -->
        <aside class="aside">
          <div class="my-info">
            <div class="avater">
              <img src="../assets/img/avatar.png" alt="" />
            </div>
            <p class="username">唐0205</p>
            <div class="data-panel">
              <div class="title">
                <span>文章</span>
                <span>分类</span>
                <span>访问量</span>
              </div>
              <div class="data">
                <span>12</span>
                <span>4</span>
                <span>null</span>
              </div>
            </div>
            <!-- 点击之后跳转地址 -->
            <div class="article-address">
              <button class="go-address">源地址</button>
            </div>
          </div>
          <div class="article-list"></div>
          <div class="nav"></div>
        </aside>

        <!-- 主页内容 -->
        <div class="content">
          <InformComp></InformComp>
          <div class="dashed">
            <div class="svg">
              <img src="../assets/img/article-little-icon.svg" alt="" />
            </div>
            &nbsp;文章
          </div>
          <ArticlePreviewComp></ArticlePreviewComp>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import KeyAnimation from "@/components/KeyAnimation.vue";
import BackgroundImgCom from "@/components/BackgroundImgCom.vue";
import threeDBox from "@/components/3d-box/threeDBox.vue";
import ArticlePreviewComp from "@/components/ArticlePreviewComp.vue";
import InformComp from "@/components/InformComp.vue";

let themeWords = ref("每日一言");

// 思路: 获取一个标签距离顶部的高度, 点击时将页面的卷入高度修改为这个数值即可
const toNextPage = (elClassName: any) => {
  // 获取界面需要卷入的高度
  let scollTop = document.querySelector(elClassName).offsetTop;
  window.scroll({
    top: scollTop + 80, // 稍微加点 要不然不够隐藏波浪线
    behavior: "smooth",
  });
};

onMounted(() => {});
</script>

<!-- 主页导航按钮的样式 -->
<style scoped src="@/css/main-nav.css"></style>
<style scoped src="@/css/night-switch.css"></style>
<style scoped src="@/css/seaside-wave.css"></style>

<style scoped lang="scss">
#WebHomeView {
  position: relative;
  transition: all 0.4s ease-in;
  overflow: hidden;

  .main {
    background-color: #fff;
    width: 100%;
    padding-top: 20px;

    .main-c {
      width: 1280px;
      margin: 0 auto; // 子元素设置的居中
      // background-color: pink;
      overflow: hidden;
      padding: 20px;

      .aside {
        float: left;

        .my-info {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          width: 270px;
          height: 340px;
          background: linear-gradient(
            -45deg,
            #e8d8b9,
            #eccec5,
            #a3e9eb,
            #bdbdf0,
            #eec1ea
          );
          background-size: 400%;
          animation: userLabel 10s ease infinite;
          padding: 20px;
          border-radius: 25px;
          box-sizing: border-box;
          box-shadow: 0 1px 20px -6px rgba(0, 0, 0, 0.5);
          transition: all 0.3s ease;

          .avater {
            width: 120px;
            height: 120px;

            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }

          .username {
            font-size: 30px;
            font-weight: 700;
            margin: 20px 0;
          }

          .data-panel {
            width: 240px;
            height: 50px;
            display: flex;
            justify-content: center;
            flex-direction: column;

            .title {
              height: 25px;
              display: flex;
              justify-content: space-around;
              align-items: center;
            }

            .data {
              height: 25px;
              display: flex;
              justify-content: space-around;
              align-items: center;
            }
          }

          .article-address {
            margin: 20px 0 20px 0;

            .go-address {
              width: 195px;
              height: 35px;
              background-color: rgb(57, 197, 187);
              border-radius: 10px;
              text-align: center;
              line-height: 35px;
            }
          }
        }

        .my-info:hover {
          box-shadow: 0 5px 10px 5px rgba(110, 110, 110, 0.4);
        }

        // .article-list {
        // }
      }

      .content {
        float: right;
        margin: 0 60px;
        width: 780px;

        .dashed {
          border-bottom: 1px dashed #313030;
          margin-bottom: 30px;
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
  }

  @keyframes userLabel {
    0% {
      background-position: 0 50%;
    }

    50% {
      background-position: 100% 0%;
    }

    100% {
      background-position: 0 50%;
    }
  }
}

/* 开关大小位置的调整 */
.night-switch {
  position: absolute;
  left: -14px;
  top: -36px;
  transform: scale(0.25);
  z-index: 10000;
}

.theme-words {
  width: 100%;
  height: 91vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* 调整水平垂直居中的 单纯的略微调整一下 */
  transform: translateY(-20px);
}

.theme-words .poem {
  font-size: 40px;
  /* 字体间距 */
  letter-spacing: 0.13em;
  color: #fff;
  font-weight: 600;
  margin-bottom: 20px;
}

.theme-words .anima {
  height: 8vh;
  /* background-color: pink; */
  margin-bottom: 20px;
}

.threeD-box {
  position: fixed;
  left: 2%;
  bottom: 6%;
  z-index: 10000;
  transform: scale(0.5);
}

/* :style="{ backgroundColor: bgc ? '#6b7abb' : '#efeeee' }" */
</style>
