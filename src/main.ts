import { sync } from 'vuex-router-sync';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';

Vue.config.productionTip = false;

sync(store, router); // done. Returns an unsync callback fn

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
