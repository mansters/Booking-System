import Vue from 'vue';
import Vuex from 'vuex';
import ThemeSetting from './themeSetting';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ThemeSetting
  }
});

export default store;
