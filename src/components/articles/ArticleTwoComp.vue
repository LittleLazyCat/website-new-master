<template>
  <div id="content">
    <div ref="content" class="content-c">
      <h3>简介</h3>
      <p>
        简单说就是<strong>一个 http服务器（高性能的http服务软件）</strong>，
      </p>
      <p>
        同时具备优秀的高性能的<strong>并发处理能力</strong>以及<strong>反向代理、负载均衡</strong>。更多的是偏向后端的知识。
      </p>
      <p>
        说白了 使用 Nginx，就是去修改 nginx
        的配置文件。<code>--conf-path：***</code>为配置文件所在文件夹
      </p>
      <blockquote>
        <p>此处的服务器就是 客户端进行访问，服务器给你返回相应的东西。</p>
      </blockquote>
      <p>
        node本身也是可以做http服务器。但是
        一般我们不会将node做的服务器对外暴漏，因为性能问题。
      </p>
      <h4>高并发的原理</h4>
      <p>
        基于Nginx
        的基本运行逻辑：主线程master不处理请求，而是去分配请求。来一个请求创建一个子进程去处理该请求，再来一个再创建一个子进程。当第一个子进程处理完毕之后，再来请求会使用第一个子进程。
      </p>
      <blockquote>
        <p>
          Nginx 在Linux
          环境下下载的，需要一个在linux中去操作。需要去了解linux的基本命令。
        </p>
      </blockquote>
      <div class="img">
        <img
          v-lazy="'https://pic.imgdb.cn/item/652004dec458853aefccb2ad.png'"
          alt=""
        />
      </div>
      <h3>反向代理</h3>
      <p>
        nginx
        不能处理业务逻辑，你去请求他，他无法去增删改查。但是node可以进行处理业务
        逻辑。所以 需要 nginx 和 node
        两者进行配合。：请求的时候请求的是nginx，但是处理逻辑使用node
      </p>
      <p>
        **反向代理：**客户端去请求nginx，nginx去把请求具体的处理任务分配给自己的内网服务器。
      </p>
      <pre><code>把内网服务器的资源通过nginx代理的形式给到了客户端。实际返回的是内网的资源，内网的资源是不对外提供服务的，而是通过nginx的方式去提供服务。**借助nginx访问内网的服务**

内网服务器：在同一个linux系统的服务器，一台机器力不只有一个服务器。
</code></pre>
      <p>
        <strong
          >设置好 nginx
          代理后，就可以在客户端访问80端口通过nginx转到3000端口上。</strong
        >
      </p>

      <div class="img">
        <img
          v-lazy="'https://pic.imgdb.cn/item/65200651c458853aefce909f.png'"
          alt=""
        />
      </div>
      <p>
        正常情况下，在客户端是无法直接访问3000端口的，因为设置的防火墙，但是通过nginx代理就可以了。
      </p>
      <pre><code>只要是非80端口的访问一律不对外开发，都要通过nginx的形式去代理。
</code></pre>
      <div class="img">
        <img
          v-lazy="'https://pic.imgdb.cn/item/652006ccc458853aefceb60f.png'"
          alt=""
        />
      </div>

      <p>使用node，在虚拟机上创建一个js文件，写一个服务器，去监听3000端口。</p>
      <p>nginx 实现代理后，就可以在客户端访问80端口通过nginx转到3000端口上。</p>
      <div class="img">
        <img
          v-lazy="'https://pic.imgdb.cn/item/652006f9c458853aefcec223.png'"
          alt=""
        />
      </div>
      <div class="img">
        <img
          v-lazy="'https://pic.imgdb.cn/item/65200710c458853aefcecabb.png'"
          alt=""
        />
      </div>
      <p>
        配置 nginx 中服务器配置的分发，启动 node中 node-img.js
        的专门处理图片的服务器。占据了3001端口号。
      </p>
      <div class="img">
        <img
          v-lazy="'https://pic.imgdb.cn/item/6520072fc458853aefcecfde.png'"
          alt=""
        />
      </div>
      <p>
        **扩展思想：**既然处理 img 就可以专门的设置一台服务器，那么处理 css js
        等文件也可以使用不同的服务器，不同资源的处理放在不同的服务器中，<strong>极大的提高了整个服务器的性能</strong>。
      </p>
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
