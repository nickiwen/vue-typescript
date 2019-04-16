import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import Vueaxios from 'vue-axios'
import ElementUI from 'element-ui';
import store from './store/index'
import 'element-ui/lib/theme-chalk/index.css';
import './registerServiceWorker'

// axios ts中不支持挂在到原型，可以这样来实现
Vue.use(Vueaxios, axios)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
