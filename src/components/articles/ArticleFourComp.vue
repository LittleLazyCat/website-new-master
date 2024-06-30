<template>
  <div id="content">
    <div ref="content" class="content-c">
      <h3>微信小程序登录</h3>
      <p>
        微信小程序可以通过微信官方提供的登录能力方便地获取微信提供的用户身份标识，快速建立小程序内的用户体系。
      </p>
      <p>
        一道面试题，比较重要**。&amp;&amp;&amp;
        <a
          href="http://doc.bufanui.com/docs/yidongduankaifa/yidongduankaifa-1edlfsc1fs3p8"
          >BF微信登录文档</a
        >**
      </p>
      <p>微信公众平台： 开发 → 开发管理 → 开发设置 → appid和app密钥</p>
      <p>微信小程序 AppID : wxfe6e9b9f22c060bb</p>
      <p>微信小程序密钥 appSecret ： cd95660d584c546c86bbb7e22383dd07</p>
      <p><strong>登录流程：</strong></p>
      <ol>
        <li>
          <p>
            1. 调用 <strong><code>uni.login</code></strong> API 得到登陆临时凭证
            code码，<strong><code>res.code</code></strong>
          </p>
        </li>
        <li>
          <p>
            2. 拿到code码之后，调用自己后台的接口向微信官方后台发送请求，并
            <strong>传入code码+appid+appsecret</strong
            >,因为规定微信后台必须是服务器和服务器之间进行通信，不允许前台和微信后台进行通信。
          </p>
        </li>
        <li>
          3. 调用后台接口向微信后台发送请求之后，微信后台返回的res
          **<code>session_key</code>**和 <strong><code>openid</code></strong>
        </li>
      </ol>
      <div class="img">
        <img
          v-lazy="'https://pic.imgdb.cn/item/65201149c458853aefd485d2.png'"
          alt=""
        />
      </div>
      <ol start="4">
        <li>
          开发者后台将 自己生成用户唯一标识
          <code>token</code>，返回给前台，存储在 localstorage 中。
        </li>
      </ol>

      <div class="img">
        <img
          v-lazy="'https://pic.imgdb.cn/item/6520116ec458853aefd48c1e.png'"
          alt=""
        />
      </div>
      <p><strong>注意：</strong></p>
      <ol start="5">
        <li>
          <p>
            1. 会话密钥
            <strong><code>session_key</code></strong> 是对用户数据进行 加密签名
            的密钥。为了应用自身的数据安全，开发者服务器不应该把会话密钥下发到小程序，也不应该对外提供这个密钥。
          </p>
        </li>
        <li>
          <p>2. 临时登录凭证 code 只能使用一次。</p>
        </li>
      </ol>
      <h3>实例代码</h3>
      <highlightjs
        class="code"
        language="javascript"
        code=' doLogin() {
    uni.login({
      timeout: 5000,
      success:(res) =&gt; {
        console.log(&#39;登陆临时凭证code码&#39;, res.code)
        uni.request({
            // 需要后台发送请求, 和微信后台进行交流
            url: &#39;http://bufantec.com/admin/xy/lite/student/doLogin&#39;,
            method: &#39;GET&#39;,
            data: {
              code: res.code,
              appid: "wxfe6e9b9f22c060bb"
              // 此时并没有传 appsecret (小程序密钥) 
              // 因为通过之前的注册register接口操作, 已经将 appid 和 appsecret 进行了关联, 
              // 不用传了, 后台的代码自动会去根据appid查找appsecret, 然后一起传给微信后台.
              // 正常情况下应该一起传的 
            },
            timeout: 5000,
            success：(res2) =&gt; {
              console.log(res2);
              this.session_key = res2.data.data.session_key
              // 此时拿到的 session_key 和 openid 这俩值后台代码进行操作，生成用户的唯一标识
              // 返回给前台 前台存储为 token。
              // 此时账号的头像, 余额等都与这个token有关, 唯一标识了该用户
              uni.setStorageSync(&#39;token&#39;, res.data.data.id)
            }
        })
      }
    })
  },
    
  doRegister() {
      uni.request({
          url: &#39;http://bufantec.com/wx/liteDev/register&#39;,
          // method: &#39;GET&#39;,
          data: {
              appId: "wxfe6e9b9f22c060bb",
              appSecret: "cd95660d584c546c86bbb7e22383dd07"
          },
          success(res) {
              console.log("res==&gt;", res);
          }
      })
  }
      '
      ></highlightjs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
const content = ref();
onMounted(() => {});
</script>

<style lang="scss" scoped>
@import url(../../css/markdown.css);
</style>
