// jshint -W033
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'
import lastfm from './plugins/api'
import InfiniteLoading from 'vue-infinite-loading';

Vue.config.productionTip = false
Vue.use(lastfm);
Vue.use(InfiniteLoading, { /* options */ });

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
