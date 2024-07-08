// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import Router from "vue-router";
// import { Store } from "vuex";

createApp(App).use(Router).mount("#app");
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
