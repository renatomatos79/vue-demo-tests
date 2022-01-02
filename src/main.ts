import Vue from "vue";
import { Component } from "vue-property-decorator";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(Vuelidate);

Component.registerHooks(["validations"]);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
