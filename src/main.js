import Vue from 'vue'
import App from './App.vue'
import router from './router'

import'mint-ui/lib/style.css'
Vue.config.productionTip = false
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import VueResource from "vue-resource";
//-将所有组件注册
Vue.use(VueResource);
//引入组件mintui库Header
//-引入指定组件
//import {Header,Button,Swipe,SwipeItem} from "mint-ui"; 
//-注册当前项目中 <mt-header>    "tt-header"
//Vue.component(Header.name,Header);
//Vue.component(Swipe.name,Swipe);  //"mt-swipe"
//Vue.component(SwipeItem.name,SwipeItem);
//Vue.component(Button.name,Button);
//console.log(Header.name);

import MintUI  from "mint-ui";
Vue.use(MintUI)
//4:创建Vuex实例对象
  //4.1:下载安装Vuex   npm i vuex -D
  //4.2:引入Vuex
  import Vuex from  "vuex"
  //4.3:注册Vuex实例
  Vue.use(Vuex)
  //4.4:创建 Vuex实例对象
  var store = new Vuex.Store({
    state:{count:0},   //购物车中商品数量
    mutations:{
       increment(state,c){
         state.count += parseInt(c)  
         //修改共享数据二个方法
       }, 
       substract(state){
         state.count--  //参数共享数据属性
       }  
    },
    getters:{
      optCount:function(state){
         return state.count; //返回共享数据
      }
    }
  });
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
