/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

import library from "./modules/library";

Vue.use(Vuex);
const vuexPersist = new VuexPersist({
  key: 'vuex-library',
  storage: window.localStorage
})

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  modules: {
    library
  }
});
