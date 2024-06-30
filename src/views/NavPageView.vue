<template>
  <div class="navPageView">
    <!-- <div class="font-type">测试字体</div> -->

    <!-- 定义版心 -->
    <div class="navPageView-c">
      <section class="video wow animate__fadeInDown">
        <div class="img">
          <img src="../assets//img//nav-top-img.jpg" alt="" />
        </div>
      </section>

      <main class="nav-content wow animate__fadeInUp">
        <section class="nav-box">
          <div class="title" style="letter-spacing: 2px">前端</div>
          <div class="nav-content">
            <!-- 下面循环 -->
            <nav class="nav-card" v-for="(item, index) in navList" :key="index">
              <a :href="item.link" target="_blank">
                <div class="img">
                  <img v-lazy="item.img" alt="" />
                </div>
                <div class="desc">
                  <p class="title">{{ item.title }}</p>
                  <p class="desc-content">{{ item.desc }}</p>
                </div>
              </a>
            </nav>
          </div>
        </section>

        <section class="nav-box">
          <div class="title" style="letter-spacing: 2px">UI组件库</div>
          <div class="nav-content">
            <nav
              class="nav-card"
              v-for="(item, index) in UINavList"
              :key="index"
            >
              <a :href="item.link" target="_blank">
                <div class="img">
                  <img v-lazy="item.img" alt="" />
                </div>
                <div class="desc">
                  <p class="title">{{ item.title }}</p>
                  <p class="desc-content">{{ item.desc }}</p>
                </div>
              </a>
            </nav>
          </div>
        </section>

        <section class="nav-box">
          <div class="title" style="letter-spacing: 2px">工具箱</div>
          <div class="nav-content">
            <!-- 下面循环 -->
            <nav
              class="nav-card"
              v-for="(item, index) in toolList"
              :key="index"
            >
              <a :href="item.link" target="_blank">
                <div class="img">
                  <img v-lazy="item.img" alt="" />
                </div>
                <div class="desc">
                  <p class="title">{{ item.title }}</p>
                  <p class="desc-content">{{ item.desc }}</p>
                </div>
              </a>
            </nav>
          </div>
        </section>

        <section class="nav-box">
          <div class="title" style="letter-spacing: 2px">程序员必备</div>
          <div class="nav-content">
            <nav
              class="nav-card"
              v-for="(item, index) in coderList"
              :key="index"
            >
              <a :href="item.link" target="_blank">
                <div class="img">
                  <img v-lazy="item.img" alt="" />
                </div>
                <div class="desc">
                  <p class="title">{{ item.title }}</p>
                  <p class="desc-content">{{ item.desc }}</p>
                </div>
              </a>
            </nav>
          </div>
        </section>
      </main>
      <div class="margin"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { navList, UINavList, toolList, coderList } from "../data/navList"; // ts 文件默认不需要 .ts 后缀,  可以省略后缀:include
import WOW from "wow.js";
onMounted(() => {
  new WOW({
    boxClass: "wow",
    animateClass: "animate__animated",
  }).init();
});

console.log("navList===>", navList);

let navInfo = reactive<NavObj[]>([]);

navInfo.push(...navList);

console.log("navInfo==>", navInfo);
</script>

<style lang="scss" scoped>
.wow {
  animation-duration: 0.8s;
  /* 设置动画持续时间为 2 秒 */
}

a {
  color: black;
}

.navPageView {
  height: 100%;
  overflow: hidden;
  background-color: var(--main--bgcColor);

  // 测试字体
  // .font-type {
  //   font-family: 'Heavy';
  //   font-size: 28px;
  // }

  .navPageView-c {
    --height: 1220px;
    width: var(--height);
    // 版心居中
    margin: 0 auto;

    .video {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 25px;

      .img {
        width: var(--height);
        height: 400px;
        position: relative;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 20px;
        }
      }
    }

    .nav-content {
      .nav-box {
        margin-top: 25px;

        .title {
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .nav-content {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;

          .nav-card {
            overflow: hidden;
            width: 283px;
            height: 80px;
            background-color: var(--nav--bgColor);
            margin: 10px 20px 10px 0;
            padding: 0 6px;
            border-radius: 10px;
            transition: all 0.6s ease;
            box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.15);
            cursor: pointer;

            .img {
              float: left;
              width: 60px;
              height: 60px;
              margin-right: 10px;
              margin-top: 10px;
              transition: all 0.6s ease;
              overflow: hidden;

              img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }

            .desc {
              display: flex;
              justify-content: center;
              align-content: center;
              flex-direction: column;
              width: 200px;
              height: 80px;
              transition: all 0.6s ease;

              .title {
                font-size: 18px;
                font-weight: 700;
                white-space: nowrap; // 不自动换行
                text-overflow: ellipsis; // 控制文本溢出时如何省略
                overflow: hidden;
                margin-bottom: 5px;
              }

              .desc-content {
                opacity: 0.7;
                font-weight: 700;
                letter-spacing: 1px;
                font-size: 13px;
                line-height: 1.2;
                // 溢出的显示三个点
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              }
            }
          }

          .nav-card:hover {
            background-color: rgb(66, 90, 239);

            .img {
              width: 0;
              height: 0px;
              // transform: scale(0);
            }

            .desc {
              width: 260px;
              white-space: normal;
              color: white;

              .desc-content {
                // white-space: normal; // 被hover时是否展示多行
              }
            }
          }
        }
      }
    }
  }

  .margin {
    height: 30px;
  }
}
</style>
