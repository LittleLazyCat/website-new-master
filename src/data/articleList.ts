// 文章预览界面信息
export const articlePreList: articlePreObj[] = [
  {
    id: 4,
    time: "2023-10-7",
    title: "微信小程序登录",
    simpleDesc:
      "微信小程序可以通过微信官方提供的登录能力方便地获取微信提供的用户身份标识，快速建立小程序内的用户体系。.",
    tagList: ["前端", "uni", "地图SDK"],
    imgSrc: "https://pic.imgdb.cn/item/65202bf6c458853aefe44c41.jpg",
    link: "",
  },

  {
    id: 2,
    time: "2023-9-28",
    title: "Nginx简要介绍",
    simpleDesc:
      "一个 http服务器,同时具备优秀的高性能的并发处理能力以及反向代理、负载均衡.",
    tagList: ["服务器", "Linux", "运维"],
    imgSrc: "https://pic.imgdb.cn/item/65202ae1c458853aefe3e682.png",
    link: "",
  },
  {
    id: 3,
    time: "2023-10-2",
    title: "SendBeacon",
    simpleDesc:
      "navigator.sendBeacon ：实现可靠的数据上报.它可以在页面卸载时安全、可靠地发送数据。",
    tagList: ["网络请求", "API", "请求优化"],
    imgSrc: "https://pic.imgdb.cn/item/65202b3ec458853aefe43868.png",
    link: "",
  },
  {
    id: 1,
    time: "2023-9-23",
    title: "测试演示文章",
    simpleDesc: "在小程序开发过程中经常使用到的获取定位功能,获取用户当前位置.",
    tagList: ["前端", "uniapp", "地图SDK"],
    imgSrc: "src/assets/img/avatar.png",
    link: "",
  },
];

// ### TODO 自定义指令:自定义指令在使用innerHTML插入内容时 不生效

// 文章全部内容
export const articleOne = {
  id: 1,
  content: ``,
};

//   <h3>异步组件</h3>
//   <p> 在大型项目中使用，一般用的较少。作为了解，了解一下写法。</p>
//   <p> 在大型项目中，我们可能需要拆分应用为更小的块，并仅在需要时再从服务器加载相关组件。</p>
//   <p> <strong>Vue 提供了 <code>defineAsyncComponent</code> 方法定义一个异步组件，来实现此功能</strong>，</p>
//   <p> 这些组件不是在本地的，而是在服务器上的，需要的时候从服务器上拿。 也就是懒加载的形式。</p>
//   <highlightjs language='javascript' code="let numAndStr: number | string = 1
// numAndStr = 'a'

// let numAndStr2: 'b' | 2;   // 此时'b'和2是类型, 也就是numAndStr2 只能是'b' 或者 2
// // numAndStr2 = 3          // X 报错

// let obj: { name: '唐' } | { age: 22 };

// // 该对象只能含有 name属性 或者age属性  或者两者都有
// // 且name的值只能是 '唐' 同理age 只能是 22

// obj = { name: '唐' }
// obj = { age: 22 }
// obj = { name: '唐', age: 22 }" />
