// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'axios'
import App from './App'
import router from './router/'

Vue.config.productionTip = false

Vue.prototype.axios=Axios

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//全局守卫
router.beforeEach((to,from,next)=>{
  
  if(to.path === '/savemoney'){
    alert('还没有登录，清先登录！')
    next('/members')
  }else{
    next()
  }
})
