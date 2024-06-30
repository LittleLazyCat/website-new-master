<template>
  <div id="content">
    <div ref="content" class="content-c">
      <h3>SendBeacon</h3>
      <p>navigator.sendBeacon ：实现可靠的数据上报。</p>
      <blockquote>
        <p>前端发送网络请求的API：ajax XMLHttpRequest 以及 SSE 和 WebSCoket</p>
      </blockquote>
      <p>
        使用常规的 ajax axios
        fetch等传统上传手段，当在正在上传时，页面被卸载会导致数据丢失，进而上传失败。
      </p>
      <p>
        为了解决这个问题，<code>navigator.sendBeacon</code> API
        被引入，它可以在页面卸载时安全、可靠地发送数据。
      </p>
      <p><strong>优点：</strong></p>
      <ol>
        <li>
          <p>1. 不受页面卸载过程的影响，确保数据可靠发送。</p>
        </li>
        <li>
          <p>2. 异步执行，不阻塞页面关闭或跳转。</p>
        </li>
        <li>
          <p>3. 能够发送跨域请求。</p>
        </li>
      </ol>
      <p><strong>缺点：</strong></p>
      <ol start="4">
        <li>
          <p>1. sendBeacon 只能发送POST，fetch 和 ajax 都可以发送任意请求</p>
        </li>
        <li>
          <p>
            2. endBeacon 只能传送少量数据（64KB 以内），fetch 和 ajax
            可以传输任意字节数据
          </p>
        </li>
        <li>
          <p>
            3. sendBeacon 无法自定义请求头，fetch 和 ajax 可以定义任意请求头
          </p>
        </li>
        <li>
          <p>4. sendBeacon 只能传输特定的类型</p>
        </li>
        <li>
          <p>
            5. 如果处于危险的网络环境，或者开启了广告屏蔽插件 此请求将无效。
          </p>
        </li>
      </ol>
      <p><strong>应用场景</strong></p>
      <ol start="9">
        <li>
          <p>
            1. 数据埋点统计( 多 )：在页面关闭或卸载时记录用户在线时间，pv(
            页面访问量 ) uv( 独立访客数 )，以及错误日志上报 按钮点击次数。
          </p>
        </li>
        <li>
          <p>2. 发送用户反馈：用户意见、bug 报告等，以便进行产品优化和改进。</p>
        </li>
        <li>
          <p>
            3.
            发送心跳包：发送心跳包，以保持与服务器的长连接，避免因为长时间没有网络请求而导致连接被关闭。
          </p>
        </li>
      </ol>
      <p><strong>该API的使用demo</strong></p>
      <p>按照 小满zs 的步骤来还是无法 传递对象。只能传递字符串</p>
      <h3>实例代码</h3>
      <highlightjs
        class="code"
        language="javascript"
        code='  const sendBtnEl = document.querySelector(&#39;.send&#39;)
  // 定义对象, sendBeacon 发送对象到后端
  let obj_json = JSON.stringify({ name: &#39;唐&#39; })
  // sendBeacon 只能使用固定的集中类型, 此处使用 Blob类型.
  //     把数据转伪Blob类型
  let blob = new Blob([obj_json], { type: &#39;application/json&#39; })

  sendBtnEl.addEventListener(&#39;click&#39;, () =&gt; {
    // 接收两个参数:  1.传输到的URL  2.传输的数据 
    navigator.sendBeacon(&#39;http://localhost:3000/api/beacon&#39;, &#39;传输字符串&#39;)
    // navigator.sendBeacon(&#39;http://localhost:3000/api/beacon&#39;, blob, {
    //   type: "beacon"
    // })
  })'
      ></highlightjs>

      <highlightjs
        class="code"
        language="javascript"
        code="// 引入express框架
const express = require(&#39;express&#39;)
// const bodyParser = require(&#39;body-parser&#39;);

// 创建express实例
const app = express()

// 解析 application/json 格式的请求体数据
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// 处理客户端发来的post请求: sendBeacon 只能发送post请求.
app.post(&#39;/api/beacon&#39;, (req, res) =&gt; {
console.log(&#39;req.body===&gt;&#39; + req.body);
res.send(&#39;ok&#39;)  // sendBeacon请求是不需要等待服务端的返回的, 所以返回尽量的简单一些.
})

app.listen(3000, () =&gt; {
console.log(&#39;Listening on port 3000&#39;);
})  "
      ></highlightjs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
onMounted(() => {});
</script>

<style lang="scss" scoped>
@import url(../../css/markdown.css);
</style>
