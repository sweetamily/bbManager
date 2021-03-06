// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import vueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$axios = axios
Vue.prototype.$http = vueResource

Vue.use(ElementUI)
Vue.use(axios)
Vue.use(vueResource)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
