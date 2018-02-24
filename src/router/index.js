import Vue from "vue";
import Router from "vue-router";
import { resolve } from "path";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: resolve => require(["../view/login.vue"], resolve),
      meta: { title: '登录' }
    },
    {
      path: "/home",
      component: resolve => require(["../view/home.vue"], resolve),
      redirect: {
        path: "/expiration",
        component: resolve =>
          require(["../components/private/expiration.vue"], resolve),
          meta: { title: '保质期' }
      },
      children: [
        {
          path: "/expiration",
          component: resolve =>
            require(["../components/private/expiration.vue"], resolve),
            meta: { title: '保质期' }
        },
        {
          path: "/percent",
          component: resolve =>
            require(["../components/private/salePercent.vue"], resolve),
            meta: { title: '销售额' }
        },
        {
          path: "/news",
          component: resolve =>
            require(["../components/private/news.vue"], resolve),
            meta: { title: '新鲜事' }
        },
        {
          path: "/newsDetail/:newsname",
          component: resolve =>
            require(["../components/private/newsTemplate.vue"], resolve)
        },
        {
          path: "/myOwn",
          component: resolve =>
            require(["../components/private/myOwn.vue"], resolve),
            meta: { title: '个人信息' }
        }
      ]
    }
  ]
});

// 使用afterEach钩子函数，保证路由已经跳转成功后修改title
router.afterEach( route => {
  let documentTitle = '后台系统';
  route.matched.forEach(path => {
    if(path.meta.title) {
      documentTitle += `- ${path.meta.title}`;
    }
  });
  document.title = documentTitle
})


export default router