<template>
  <div class="login">
    <!-- 登陆界面 也要使用 这张背景图  -->

    <BackgroundImgCom></BackgroundImgCom>
    <!-- 组件传值: 父传子, 点击登录让isShowMask=true, 传递过去  -->
    <!-- <AlertCom :isShow="isShowMask" :message="message"></AlertCom> -->

    <!-- 确定版心 -->
    <div class="content">
      <div class="content-c">
        <div class="forms">
          <!-- 注册界面 -->
          <div class="form switch-login left">
            <h1>已有帐号?</h1>
            <p>请登录🚀</p>
            <button
              class="btn-login"
              @click="
                toLogin(
                  '.switch-login.left',
                  '.form-input.right',
                  '.form-input.left',
                  '.switch-register.right',
                )
              "
            >
              登录
            </button>
          </div>

          <div class="form form-input right">
            <h1>注册</h1>
            <input
              v-model="resgisterUser.username"
              type="text"
              placeholder="用户名"
            />
            <input
              v-model="resgisterUser.pwd"
              type="password"
              placeholder="密码"
            />
            <!-- 失去焦点时 触发判断两次密码是否一致的函数 -->
            <input
              v-model="resgisterUser.confirmPwd"
              @blur="comparePwd"
              type="password"
              placeholder="确认密码"
            />
            <input
              v-model="resgisterUser.tel"
              type="text"
              placeholder="电话号码"
              @keydown.enter="registe"
            />
            <button class="btn-register" @click="registe">注册</button>
          </div>

          <!-- 登陆界面 -->
          <div class="form form-input left">
            <h1>登录</h1>
            <input v-model="user.username" type="text" placeholder="用户名" />
            <input
              v-model="user.password"
              type="password"
              placeholder="密码"
              @keydown.enter="dologin"
            />
            <p>忘记密码?</p>
            <button id="loginButton" class="btn-login" @click="dologin">
              登录
            </button>
          </div>

          <div class="form switch-register right">
            <h1>没有账号?</h1>
            <p>立即注册😃</p>
            <button
              class="btn-register"
              @click="
                toRegister(
                  '.switch-login.left',
                  '.form-input.right',
                  '.form-input.left',
                  '.switch-register.right',
                )
              "
            >
              注册
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BackgroundImgCom from "@/components/BackgroundImgCom.vue";
import { onMounted, reactive, ref } from "vue";

let isShowMask = ref(false);
let message = ref("");
let lock = ref("");
let user = reactive({
  username: "",
  password: "",
});
let resgisterUser = reactive({
  username: "",
  pwd: "",
  confirmPwd: "",
  upPwd: "",
  tel: "",
});

const dologin = async () => {
  // let res = await login(user)
  // if (res.success) {
  //   // 登陆成功之后 跳转界面 跳转到首页, 存储token, 显示登陆成功弹窗
  //   isShowMask.value = !isShowMask.value
  //   message.value = '登陆成功，即将跳转到首页'
  //   setTimeout(() => {
  //     $router.push('/WebsitHome')
  //     user = { username: '', password: '' }
  //   }, 1000)
  //   localStorage.setItem('token', res.data.token)
  // } else {
  //   // 提示 登陆失败, 弹窗出现, 显示res.message 的内容
  //   isShowMask.value = !isShowMask
  //   message = res.message
  // }
};

const registe = async () => {
  // 再次判断一次
  // if (comparePwd()) {
  //   resgisterUser.upPwd = resgisterUser.confirmPwd
  //   let res = await resgisterUser(resgisterUser)
  //   if (res.success) {
  //     user.username = resgisterUser.username
  //     resgisterUser = { tel: '', confirmPwd: '', pwd: '', upPwd: '' }
  //     message.value = '注册成功, 返回登陆界面.'
  //     toLogin('.switch-login.left', '.form-input.right', '.form-input.left', '.switch-register.right')
  //     isShowMask.value = !isShowMask.value;
  //   } else {
  //     message = res.message
  //     isShowMask.value = !isShowMask.value;
  //   }
  // }
};

const comparePwd = () => {
  if (resgisterUser.confirmPwd != resgisterUser.pwd) {
    isShowMask.value = !isShowMask;
    message.value = "两次密码不一致";
    return false;
  } else {
    return true;
  }
};

// 登录和注册界面的动画
function toLogin(
  classNameLeft: any,
  classNameRight: any,
  classNameBottom: any,
  ToRight: any,
) {
  let ElLeft = document.querySelector(classNameLeft);
  ElLeft.style.cssText = `transform: translateX(100%);opacity: 0;`;
  let ElRight = document.querySelector(classNameRight);
  ElRight.style.cssText = `transform: translateX(-100%);opacity: 0;`;
  let ElBottom = document.querySelector(classNameBottom);
  ElBottom.style.transform = "translateY(-100%)";
  let ElToRight = document.querySelector(ToRight);
  ElToRight.style.cssText = `left: 50%;opacity: 1;z-index: 10;`;
}
function toRegister(
  classNameLeft: any,
  classNameRight: any,
  classNameBottom: any,
  ToRight: any,
) {
  let ElLeft = document.querySelector(classNameLeft);
  ElLeft.style.cssText = `opacity: 1;`;
  let ElRight = document.querySelector(classNameRight);
  ElRight.style.cssText = `opacity: 1;`;
  let ElBottom = document.querySelector(classNameBottom);
  ElBottom.style.transform = "translateY(100%)";
  let ElToRight = document.querySelector(ToRight);
  ElToRight.style.cssText = `left: 0;opacity: 0;z-index: -5;`;
}

onMounted(() => {});
</script>

<style scoped src="@/css/login.css"></style>
<style lang="scss" scoped></style>
