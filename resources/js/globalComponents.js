//resources/js/globalComponents.js
import Vue from "vue";
import ProtectedNavigation from "./components/ProtectedNavigation";
import PublicNavigation from "./components/PublicNavigation";

Vue.component("ProtectedNavigation", ProtectedNavigation);
Vue.component("PublicNavigation", PublicNavigation);
