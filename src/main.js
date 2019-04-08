// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axiosInit from './config/axios-init'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
Vue.config.productionTip = false
// axios.config = axiosInit;
Vue.prototype.$axios=axiosInit

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
