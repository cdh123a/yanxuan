import Vue from 'vue'

import App from './app.vue'
import router from './router'
import store from './store'

import './mock'


//创建vm对象
new Vue({
  el:'#app',
  /*components:{
    App
  },
  template:'< App/>',*/
 //在页面内创建一个App标签  将内容映射入页面
 render : h => h(App),
  //注册路由
 router,
  //注册store
 store
})
