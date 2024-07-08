import * as Vue from "vue";
import * as Vuex from "vuex";
import * as VueRouter from "vue-router";
import DashBoard from "@/pages/DashBoard.vue";
import AboutContent from "@/pages/AboutContent.vue";
import NotFound from "@/pages/NotFound.vue";

// Vue.use(VueRouter);
export default new Router({
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashBoard,
    },
    {
      path: "/about",
      name: "about",
      component: AboutContent,
    },
    {
      path: "/404",
      name: "NotFound",
      component: "NotFound",
    },
    {
      path: "*",
      redirect: "/404,",
    },
  ],
});
