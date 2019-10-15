import Vue from "vue";
import Vuex from "vuex";

import library from "./modules/library";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    library
  }
});