import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import LayoutPage from "@/Layout/index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LayoutPage,
    children: [
      {
        path: "/",
        name: "HomeView",
        component: () => import("@/views/HomeView.vue"),
        meta: {
          title: "首页",
        },
      },
      {
        path: "/navigation",
        name: "Navigation",
        component: () => import("@/views/NavPageView.vue"),
        meta: {
          title: "百宝箱",
          headerBgColor: "rgb(62,62,62)", // 不同的界面 导航栏设置不同的颜色
        },
      },
      {
        path: "/articlePage",
        name: "ArticlePage",
        component: () => import("@/views/ArticlePage.vue"),
        meta: {
          title: "文章详情",
          headerBgColor: "transparent",
        },
      },
    ],
  },
  {
    path: "/login",
    name: "LoginView",
    component: () => import("@/views/LoginView.vue"),
    meta: {
      title: "登录",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  // history:createWebHistory(),

  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { top: 0 };
  },
});

// 全局前置路由守卫
// 全局路由 监听修改doc的title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string;
  next();
});

export default router;
