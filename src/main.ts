import Vue from "vue";
import { App } from "./App";
import { store } from "@/store"

Vue.config.productionTip = false;

// registering a new instance of Vue to be injected into #app in the DOM
new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
