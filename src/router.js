import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
//1:引入自定义组件 
import TestContainer from "./components/testContainer.vue";
import listContainer from "./components/listContainer.vue"
import homeContainer from "./components/tabbar/HomeContainer.vue"
import goodslistContainer from "./components/goods/goodslistContainer.vue"
import goodsdetailsContainer from "./components/goods/goodsdetailsContainer.vue"
import shopCar from "./components/tabbar/shoppingCar.vue"
import login from './components/login/loginContainer.vue'
Vue.use(Router)
//2:配置访问自定义组件路径
//   {path访问路径 component  组件名称}
export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    {path:"/test",component:TestContainer},
    {path:"/list",component:listContainer},
    {path:"/home",component:homeContainer},
    {path:"/home/goodslist",component:goodslistContainer},
    {path:"/home/goodsdetails",component:goodsdetailsContainer},
    {path:"/home/shopCar",component:shopCar},
    {path:"/home/login",component:login},
  ]
})


