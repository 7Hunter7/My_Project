import Vue from "vue";
import Router from "vue-router";
import DashBoard from "@/pages/DashBoard.vue";
import AboutContent from "@/pages/AboutContent.vue";

Vue.use(Router);

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
  ],
});
