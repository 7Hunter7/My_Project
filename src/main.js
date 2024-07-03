// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import { Store } from "vuex";

createApp(App).mount("#app");
createApp(Store).mount("#app");

// new Vue({
// el: "#app",
// template: "<App />",
// components: {
//   App,
// },
// store, // подключаем хранилище к нашему приложению
//   render: (h) => h(App),
// }).$mount("#app");
