import Vue from 'vue';
import Vuex from 'vuex';
import User from './User';
import ticket from './Ticket/ticket'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    User,
    ticket
  }
});


