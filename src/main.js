// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      appMessage: 'hello world',
    },
  },
  ja: {
    message: {
      appMessage: 'こんにちは、世界',
    },
  },
};

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  i18n,
});
