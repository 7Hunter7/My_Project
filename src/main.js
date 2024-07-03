import * as Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import store from "./store/";
import { createApp } from "vue";

// Vue.use(Vuex);
// Vue.config.productionTip = false;

createApp(App).use(Vuex).mount("#app");

new Vue({
  render: (h) => h(App),
  store: new Vuex.Store(store),
}).$mount("#app");
