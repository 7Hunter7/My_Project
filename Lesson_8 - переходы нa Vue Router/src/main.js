// import './assets/main.css'
import * as Vuex from "vuex";
import * as VueRouter from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";
// import Router from "vue-router";
// import { Store } from "vuex";
// импортируем экземпляр роутера из листинга выше
import router from "./router";

// createApp(App).use(VueRouter).mount("#app");
// createApp(Store).mount("#app");

// new Vue({
// el: "#app",
// template: "<App />",
// components: {
//   App,
// },
// store, // подключаем хранилище к нашему приложению
// router, // подключаем роутер к нашему приложению
//   render: (h) => h(App),
// }).$mount("#app");

new Vue({
  el: "main",
  template: "<App />",
  components: {
    App,
  },
  router, // подключаем роутер к нашему приложению
});
