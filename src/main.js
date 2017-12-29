// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import axios from 'axios'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$axios = axios;


Vue.use(ElementUI)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
