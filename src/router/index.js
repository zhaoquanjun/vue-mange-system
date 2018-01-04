import Vue from "vue";
import Router from "vue-router";
import { resolve } from "path";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: resolve => require(["../view/login.vue"], resolve)
    },
    {
      path: "/home",
      component: resolve => require(["../view/home.vue"], resolve),
      redirect: {
        path: "/expiration",
        component: resolve =>
          require(["../components/private/expiration.vue"], resolve)
      },
      children: [
        {
          path: "/expiration",
          component: resolve =>
            require(["../components/private/expiration.vue"], resolve)
        },
        {
          path: "/percent",
          component: resolve =>
            require(["../components/private/salePercent.vue"], resolve)
        },
        {
          path: "/news",
          component: resolve =>
            require(["../components/private/news.vue"], resolve)
        },
        {
          path: "/newsDetail/:newsname",
          component: resolve =>
            require(["../components/private/newsTemplate.vue"], resolve)
        },
        {
          path: "/myOwn",
          component: resolve =>
            require(["../components/private/myOwn.vue"], resolve)
        }
      ]
    }
  ]
});
