import{_ as A}from"./article-little-icon-97b95826.js";import{d as g,j as x,o as v,q as y,g as $,c as r,e,k as u,w as i,i as a,a as l,p as b,b as m,_ as h,m as j,u as q,f as C,s as I,t as w,l as B,x as P,y as T}from"./index-bcaaf44e.js";import{W as N}from"./wow-954a76e1.js";const L=""+new URL("home-img-1d298994.jpg",import.meta.url).href,o=t=>(b("data-v-72592a25"),t=t(),m(),t),D={id:"content"},E=o(()=>e("h3",null,"异步组件",-1)),R=o(()=>e("p",null,"在大型项目中使用，一般用的较少。作为了解，了解一下写法。",-1)),O=o(()=>e("p",null," 在大型项目中，我们可能需要拆分应用为更小的块，并仅在需要时再从服务器加载相关组件。 ",-1)),z=o(()=>e("p",null,[e("strong",null,[a("Vue 提供了 "),e("code",null,"defineAsyncComponent"),a(" 方法定义一个异步组件，来实现此功能")]),a("， ")],-1)),V=o(()=>e("p",null," 这些组件不是在本地的，而是在服务器上的，需要的时候从服务器上拿。 也就是懒加载的形式。 ",-1)),F=o(()=>e("h3",null,[e("strong",null,"匿名函数表达式")],-1)),W=o(()=>e("p",null,[e("strong",null,"undefined"),a(" 已定义但是未被赋值")],-1)),U=o(()=>e("li",null,[e("p",null,"必须用变量去接收匿名函数，且u只能在函数声明之后调用")],-1)),G=o(()=>e("li",null,[e("p",null,"代码中只要出现 anon_fun(), 就会执行一遍匿名函数的函数体")],-1)),M=o(()=>e("strong",null,"被匿名函数赋值的变量",-1)),X=o(()=>e("p",null,"此时被匿名函数赋值的变量 仍是 未被赋值 的状态 undefined",-1)),H=o(()=>e("h3",null,"实例代码",-1)),J=g({__name:"ArticleOneComp",setup(t){const c=x();return v(()=>{}),(d,n)=>{const _=y("highlightjs"),p=$("red");return l(),r("div",D,[e("div",{ref_key:"content",ref:c,class:"content-c"},[E,R,O,z,V,u(_,{language:"javascript",code:`        let numAndStr: number | string = 1\r
        numAndStr = 'a'\r
\r
        let numAndStr2: 'b' | 2;   // 此时'b'和2是类型, 也就是numAndStr2 只能是'b' 或者 2\r
        // numAndStr2 = 3          // X 报错\r
\r
        let obj: { name: '唐' } | { age: 22 };\r
\r
        // 该对象只能含有 name属性 或者age属性  或者两者都有\r
        // 且name的值只能是 '唐' 同理age 只能是 22\r
\r
        obj = { name: '唐' }\r
        obj = { age: 22 }\r
        obj = { name: '唐', age: 22 }`}),F,W,e("ul",null,[U,G,e("li",null,[i((l(),r("p",null,[M,a("不是一个方法, 没有经过function的洗礼, so后面不能加() ， ")])),[[p]]),X])]),e("div",null,[H,u(_,{language:"javascript",code:`    var anon_fun = function(){\r
      document.write('hello<br>')\r
      }\r
    anon_fun() \r
    var list_1 = anon_fun \r
    //   var list_1 = anon_fun()  \r
    //  这样写不正确，函数名()不能赋给变量,会报错,承受不住,因为list_1本身就不是函数 \r
\r
    list_1()                    // 执行anon_fun函数体的内容\r
    console.log(typeof list_1)  // function\r
    console.log(typeof anon_fun())  // function\r
\r
    console.log(anon_fun)     // ƒ (){ document.write('hello<br>')}\r
    console.log(list_1)       // ƒ (){ document.write('hello<br>')}\r
\r
    console.log(anon_fun())   // undefined 没有返回值的函数默认返回undefined\r
    console.log(list_1())     // undefined\r
    `})])],512)])}}});const S=h(J,[["__scopeId","data-v-72592a25"]]),s=t=>(b("data-v-116b3ede"),t=t(),m(),t),K={id:"content"},Q={ref:"content",class:"content-c"},Y=j("<h3 data-v-116b3ede>简介</h3><p data-v-116b3ede> 简单说就是<strong data-v-116b3ede>一个 http服务器（高性能的http服务软件）</strong>， </p><p data-v-116b3ede> 同时具备优秀的高性能的<strong data-v-116b3ede>并发处理能力</strong>以及<strong data-v-116b3ede>反向代理、负载均衡</strong>。更多的是偏向后端的知识。 </p><p data-v-116b3ede> 说白了 使用 Nginx，就是去修改 nginx 的配置文件。<code data-v-116b3ede>--conf-path：***</code>为配置文件所在文件夹 </p><blockquote data-v-116b3ede><p data-v-116b3ede>此处的服务器就是 客户端进行访问，服务器给你返回相应的东西。</p></blockquote><p data-v-116b3ede> node本身也是可以做http服务器。但是 一般我们不会将node做的服务器对外暴漏，因为性能问题。 </p><h4 data-v-116b3ede>高并发的原理</h4><p data-v-116b3ede> 基于Nginx 的基本运行逻辑：主线程master不处理请求，而是去分配请求。来一个请求创建一个子进程去处理该请求，再来一个再创建一个子进程。当第一个子进程处理完毕之后，再来请求会使用第一个子进程。 </p><blockquote data-v-116b3ede><p data-v-116b3ede> Nginx 在Linux 环境下下载的，需要一个在linux中去操作。需要去了解linux的基本命令。 </p></blockquote>",9),Z={class:"img"},ee={alt:""},te=s(()=>e("h3",null,"反向代理",-1)),ne=s(()=>e("p",null," nginx 不能处理业务逻辑，你去请求他，他无法去增删改查。但是node可以进行处理业务 逻辑。所以 需要 nginx 和 node 两者进行配合。：请求的时候请求的是nginx，但是处理逻辑使用node ",-1)),ae=s(()=>e("p",null," **反向代理：**客户端去请求nginx，nginx去把请求具体的处理任务分配给自己的内网服务器。 ",-1)),oe=s(()=>e("pre",null,[e("code",null,`把内网服务器的资源通过nginx代理的形式给到了客户端。实际返回的是内网的资源，内网的资源是不对外提供服务的，而是通过nginx的方式去提供服务。**借助nginx访问内网的服务**

内网服务器：在同一个linux系统的服务器，一台机器力不只有一个服务器。
`)],-1)),se=s(()=>e("p",null,[e("strong",null,"设置好 nginx 代理后，就可以在客户端访问80端口通过nginx转到3000端口上。")],-1)),ce={class:"img"},de={alt:""},ie=s(()=>e("p",null," 正常情况下，在客户端是无法直接访问3000端口的，因为设置的防火墙，但是通过nginx代理就可以了。 ",-1)),le=s(()=>e("pre",null,[e("code",null,`只要是非80端口的访问一律不对外开发，都要通过nginx的形式去代理。
`)],-1)),re={class:"img"},_e={alt:""},pe=s(()=>e("p",null,"使用node，在虚拟机上创建一个js文件，写一个服务器，去监听3000端口。",-1)),ue=s(()=>e("p",null,"nginx 实现代理后，就可以在客户端访问80端口通过nginx转到3000端口上。",-1)),ge={class:"img"},ve={alt:""},he={class:"img"},be={alt:""},me=s(()=>e("p",null," 配置 nginx 中服务器配置的分发，启动 node中 node-img.js 的专门处理图片的服务器。占据了3001端口号。 ",-1)),fe={class:"img"},xe={alt:""},ye=s(()=>e("p",null,[a(" **扩展思想：**既然处理 img 就可以专门的设置一台服务器，那么处理 css js 等文件也可以使用不同的服务器，不同资源的处理放在不同的服务器中，"),e("strong",null,"极大的提高了整个服务器的性能"),a("。 ")],-1)),$e=g({__name:"ArticleTwoComp",setup(t){return v(()=>{}),(c,d)=>{const n=$("lazy");return l(),r("div",K,[e("div",Q,[Y,e("div",Z,[i(e("img",ee,null,512),[[n,"https://pic.imgdb.cn/item/652004dec458853aefccb2ad.png"]])]),te,ne,ae,oe,se,e("div",ce,[i(e("img",de,null,512),[[n,"https://pic.imgdb.cn/item/65200651c458853aefce909f.png"]])]),ie,le,e("div",re,[i(e("img",_e,null,512),[[n,"https://pic.imgdb.cn/item/652006ccc458853aefceb60f.png"]])]),pe,ue,e("div",ge,[i(e("img",ve,null,512),[[n,"https://pic.imgdb.cn/item/652006f9c458853aefcec223.png"]])]),e("div",he,[i(e("img",be,null,512),[[n,"https://pic.imgdb.cn/item/65200710c458853aefcecabb.png"]])]),me,e("div",fe,[i(e("img",xe,null,512),[[n,"https://pic.imgdb.cn/item/6520072fc458853aefcecfde.png"]])]),ye],512)])}}});const je=h($e,[["__scopeId","data-v-116b3ede"]]),ke={id:"content"},we={ref:"content",class:"content-c"},Be=j('<h3 data-v-e72226ab>SendBeacon</h3><p data-v-e72226ab>navigator.sendBeacon ：实现可靠的数据上报。</p><blockquote data-v-e72226ab><p data-v-e72226ab>前端发送网络请求的API：ajax XMLHttpRequest 以及 SSE 和 WebSCoket</p></blockquote><p data-v-e72226ab> 使用常规的 ajax axios fetch等传统上传手段，当在正在上传时，页面被卸载会导致数据丢失，进而上传失败。 </p><p data-v-e72226ab> 为了解决这个问题，<code data-v-e72226ab>navigator.sendBeacon</code> API 被引入，它可以在页面卸载时安全、可靠地发送数据。 </p><p data-v-e72226ab><strong data-v-e72226ab>优点：</strong></p><ol data-v-e72226ab><li data-v-e72226ab><p data-v-e72226ab>1. 不受页面卸载过程的影响，确保数据可靠发送。</p></li><li data-v-e72226ab><p data-v-e72226ab>2. 异步执行，不阻塞页面关闭或跳转。</p></li><li data-v-e72226ab><p data-v-e72226ab>3. 能够发送跨域请求。</p></li></ol><p data-v-e72226ab><strong data-v-e72226ab>缺点：</strong></p><ol start="4" data-v-e72226ab><li data-v-e72226ab><p data-v-e72226ab>1. sendBeacon 只能发送POST，fetch 和 ajax 都可以发送任意请求</p></li><li data-v-e72226ab><p data-v-e72226ab> 2. endBeacon 只能传送少量数据（64KB 以内），fetch 和 ajax 可以传输任意字节数据 </p></li><li data-v-e72226ab><p data-v-e72226ab> 3. sendBeacon 无法自定义请求头，fetch 和 ajax 可以定义任意请求头 </p></li><li data-v-e72226ab><p data-v-e72226ab>4. sendBeacon 只能传输特定的类型</p></li><li data-v-e72226ab><p data-v-e72226ab> 5. 如果处于危险的网络环境，或者开启了广告屏蔽插件 此请求将无效。 </p></li></ol><p data-v-e72226ab><strong data-v-e72226ab>应用场景</strong></p><ol start="9" data-v-e72226ab><li data-v-e72226ab><p data-v-e72226ab> 1. 数据埋点统计( 多 )：在页面关闭或卸载时记录用户在线时间，pv( 页面访问量 ) uv( 独立访客数 )，以及错误日志上报 按钮点击次数。 </p></li><li data-v-e72226ab><p data-v-e72226ab>2. 发送用户反馈：用户意见、bug 报告等，以便进行产品优化和改进。</p></li><li data-v-e72226ab><p data-v-e72226ab> 3. 发送心跳包：发送心跳包，以保持与服务器的长连接，避免因为长时间没有网络请求而导致连接被关闭。 </p></li></ol><p data-v-e72226ab><strong data-v-e72226ab>该API的使用demo</strong></p><p data-v-e72226ab>按照 小满zs 的步骤来还是无法 传递对象。只能传递字符串</p><h3 data-v-e72226ab>实例代码</h3>',14),Se=g({__name:"ArticleThreeComp",setup(t){return v(()=>{}),(c,d)=>{const n=y("highlightjs");return l(),r("div",ke,[e("div",we,[Be,u(n,{class:"code",language:"javascript",code:`  const sendBtnEl = document.querySelector('.send')\r
  // 定义对象, sendBeacon 发送对象到后端\r
  let obj_json = JSON.stringify({ name: '唐' })\r
  // sendBeacon 只能使用固定的集中类型, 此处使用 Blob类型.\r
  //     把数据转伪Blob类型\r
  let blob = new Blob([obj_json], { type: 'application/json' })\r
\r
  sendBtnEl.addEventListener('click', () => {\r
    // 接收两个参数:  1.传输到的URL  2.传输的数据 \r
    navigator.sendBeacon('http://localhost:3000/api/beacon', '传输字符串')\r
    // navigator.sendBeacon('http://localhost:3000/api/beacon', blob, {\r
    //   type: "beacon"\r
    // })\r
  })`}),u(n,{class:"code",language:"javascript",code:`// 引入express框架\r
const express = require('express')\r
// const bodyParser = require('body-parser');\r
\r
// 创建express实例\r
const app = express()\r
\r
// 解析 application/json 格式的请求体数据\r
// app.use(bodyParser.json());\r
// app.use(bodyParser.urlencoded({ extended: true }));\r
\r
\r
// 处理客户端发来的post请求: sendBeacon 只能发送post请求.\r
app.post('/api/beacon', (req, res) => {\r
console.log('req.body===>' + req.body);\r
res.send('ok')  // sendBeacon请求是不需要等待服务端的返回的, 所以返回尽量的简单一些.\r
})\r
\r
app.listen(3000, () => {\r
console.log('Listening on port 3000');\r
})  `})],512)])}}});const Ae=h(Se,[["__scopeId","data-v-e72226ab"]]),f=t=>(b("data-v-57e427f0"),t=t(),m(),t),qe={id:"content"},Ce=j('<h3 data-v-57e427f0>微信小程序登录</h3><p data-v-57e427f0> 微信小程序可以通过微信官方提供的登录能力方便地获取微信提供的用户身份标识，快速建立小程序内的用户体系。 </p><p data-v-57e427f0> 一道面试题，比较重要**。&amp;&amp;&amp; <a href="http://doc.bufanui.com/docs/yidongduankaifa/yidongduankaifa-1edlfsc1fs3p8" data-v-57e427f0>BF微信登录文档</a>** </p><p data-v-57e427f0>微信公众平台： 开发 → 开发管理 → 开发设置 → appid和app密钥</p><p data-v-57e427f0>微信小程序 AppID : wxfe6e9b9f22c060bb</p><p data-v-57e427f0>微信小程序密钥 appSecret ： cd95660d584c546c86bbb7e22383dd07</p><p data-v-57e427f0><strong data-v-57e427f0>登录流程：</strong></p><ol data-v-57e427f0><li data-v-57e427f0><p data-v-57e427f0> 1. 调用 <strong data-v-57e427f0><code data-v-57e427f0>uni.login</code></strong> API 得到登陆临时凭证 code码，<strong data-v-57e427f0><code data-v-57e427f0>res.code</code></strong></p></li><li data-v-57e427f0><p data-v-57e427f0> 2. 拿到code码之后，调用自己后台的接口向微信官方后台发送请求，并 <strong data-v-57e427f0>传入code码+appid+appsecret</strong>,因为规定微信后台必须是服务器和服务器之间进行通信，不允许前台和微信后台进行通信。 </p></li><li data-v-57e427f0> 3. 调用后台接口向微信后台发送请求之后，微信后台返回的res **<code data-v-57e427f0>session_key</code>**和 <strong data-v-57e427f0><code data-v-57e427f0>openid</code></strong></li></ol>',8),Ie={class:"img"},Pe={alt:""},Te=f(()=>e("ol",{start:"4"},[e("li",null,[a(" 开发者后台将 自己生成用户唯一标识 "),e("code",null,"token"),a("，返回给前台，存储在 localstorage 中。 ")])],-1)),Ne={class:"img"},Le={alt:""},De=f(()=>e("p",null,[e("strong",null,"注意：")],-1)),Ee=f(()=>e("ol",{start:"5"},[e("li",null,[e("p",null,[a(" 1. 会话密钥 "),e("strong",null,[e("code",null,"session_key")]),a(" 是对用户数据进行 加密签名 的密钥。为了应用自身的数据安全，开发者服务器不应该把会话密钥下发到小程序，也不应该对外提供这个密钥。 ")])]),e("li",null,[e("p",null,"2. 临时登录凭证 code 只能使用一次。")])],-1)),Re=f(()=>e("h3",null,"实例代码",-1)),Oe=g({__name:"ArticleFourComp",setup(t){const c=x();return v(()=>{}),(d,n)=>{const _=y("highlightjs"),p=$("lazy");return l(),r("div",qe,[e("div",{ref_key:"content",ref:c,class:"content-c"},[Ce,e("div",Ie,[i(e("img",Pe,null,512),[[p,"https://pic.imgdb.cn/item/65201149c458853aefd485d2.png"]])]),Te,e("div",Ne,[i(e("img",Le,null,512),[[p,"https://pic.imgdb.cn/item/6520116ec458853aefd48c1e.png"]])]),De,Ee,Re,u(_,{class:"code",language:"javascript",code:` doLogin() {\r
    uni.login({\r
      timeout: 5000,\r
      success:(res) => {\r
        console.log('登陆临时凭证code码', res.code)\r
        uni.request({\r
            // 需要后台发送请求, 和微信后台进行交流\r
            url: 'http://bufantec.com/admin/xy/lite/student/doLogin',\r
            method: 'GET',\r
            data: {\r
              code: res.code,\r
              appid: "wxfe6e9b9f22c060bb"\r
              // 此时并没有传 appsecret (小程序密钥) \r
              // 因为通过之前的注册register接口操作, 已经将 appid 和 appsecret 进行了关联, \r
              // 不用传了, 后台的代码自动会去根据appid查找appsecret, 然后一起传给微信后台.\r
              // 正常情况下应该一起传的 \r
            },\r
            timeout: 5000,\r
            success：(res2) => {\r
              console.log(res2);\r
              this.session_key = res2.data.data.session_key\r
              // 此时拿到的 session_key 和 openid 这俩值后台代码进行操作，生成用户的唯一标识\r
              // 返回给前台 前台存储为 token。\r
              // 此时账号的头像, 余额等都与这个token有关, 唯一标识了该用户\r
              uni.setStorageSync('token', res.data.data.id)\r
            }\r
        })\r
      }\r
    })\r
  },\r
    \r
  doRegister() {\r
      uni.request({\r
          url: 'http://bufantec.com/wx/liteDev/register',\r
          // method: 'GET',\r
          data: {\r
              appId: "wxfe6e9b9f22c060bb",\r
              appSecret: "cd95660d584c546c86bbb7e22383dd07"\r
          },\r
          success(res) {\r
              console.log("res==>", res);\r
          }\r
      })\r
  }\r
      `})],512)])}}});const ze=h(Oe,[["__scopeId","data-v-57e427f0"]]),k=t=>(b("data-v-7ef2046c"),t=t(),m(),t),Ve={class:"articlePage"},Fe={class:"wow animate__fadeInDown"},We=k(()=>e("div",{class:"top-img"},[e("img",{src:L,alt:""})],-1)),Ue={class:"article-desc"},Ge={class:"desc-c"},Me={class:"title"},Xe={class:"tag"},He={class:"time"},Je=k(()=>e("div",{class:"placeholder"},null,-1)),Ke={class:"content wow animate__fadeInUp"},Qe={class:"content-c"},Ye=k(()=>e("div",{class:"dashed"},[e("div",{class:"svg"},[e("img",{src:A,alt:""})]),a("  文章 ")],-1)),Ze=g({__name:"articlePage",setup(t){const c=q();C();const d=I(S);let n=x();switch(n.value=Number(c.query.id),n.value){case 1:d.value=S;break;case 2:d.value=je;break;case 3:d.value=Ae;break;case 4:d.value=ze;break}return console.log("route.query.id===>",c.query.id),v(()=>{new N({boxClass:"wow",animateClass:"animate__animated"}).init()}),(_,p)=>(l(),r("div",Ve,[e("div",Fe,[We,e("div",Ue,[e("div",Ge,[e("div",Me,w(B(c).query.title),1),e("div",Xe,[e("div",He,w(B(c).query.time),1)])])]),Je]),e("div",Ke,[e("div",Qe,[Ye,(l(),P(T(d.value)))])])]))}});const at=h(Ze,[["__scopeId","data-v-7ef2046c"]]);export{at as default};
