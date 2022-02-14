/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require("./bootstrap");
window.Vue = require("vue").default;
import axios from "axios";
import VeeValidate from "vee-validate";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";
import App from "./App.vue";
import "./globalComponents";
//import { routes } from "./routes";
import router from "./router";
//resources/js/app.js
import store from "./store";

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(VeeValidate, {
    // This is the default
    inject: true,
    // Important to name this something other than 'fields'
    fieldsBagName: "veeFields",
    // This is not required but avoids possible naming conflicts
    errorBagName: "veeErrors",
});
store.dispatch("auth/getUser").then((res) => {
    const app = new Vue({
        el: "#app",
        render: (h) => h(App),
        router,
        store,
    });
});
