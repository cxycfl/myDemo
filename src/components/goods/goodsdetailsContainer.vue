<template>
     <div class="app-goodsdetails">
          <div class="mui-card" v-for="item of list" :key="item.id">
				<div class="mui-card-header">
                    <img :src="item.pic"/>
                </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                        <span class="moy">￥</span>
                        <span>{{item.price.toFixed(2)}}</span>
                        </p>
                        <p>
                         <span> 价格 :</span>
                         <span class="pprice">￥{{item.pprice.toFixed(2)}}</span>
                        </p>
                        <p class="promise">该商品最高可享受6期分期免息</p>
                         <button class="btn">好购</button>
                         <span class="title">{{item.title}}</span>
					</div>
                  </div>
                  <hr>
                <div class="mui-card-content">
					<div class="mui-card-content-inner">
						<ul class="cu">
                           <li>
                               <span class="little">服务</span>
                               <span class="cl">正品保证 急速退款 三包服务</span>
                           </li>
                           <li>
                                 <span class="little">规格</span>
                                  <span class="cl">选择颜色分类</span>
                           </li>
                           <li>
                                 <span class="little">参数</span>
                                  <span class="cl">品牌 销售渠道...</span>
                           </li>
                        </ul>
					</div>
				</div>
				<div class="mui-card-footer">
                    <div>购买数量</div>
                    <div class="mui-numbox">
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="getSub">-</button>
					<input class="mui-input-numbox" type="number" value="1" v-model="val"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button" @click="getAdd">+</button>
				</div>
                </div>
                  <p> 
                       <router-link :to="'/home/shopCar?id='+id+'&count='+val"> 
                         <mt-button type="primary" size="small">立即购买 </mt-button>
                         </router-link>
					<mt-button type="danger" size="small" @click="addCarTo()">加入购物车</mt-button></p>
			</div>
     </div>
</template>

<script>
import {Toast} from "mint-ui"
       export default{
           data(){
               return {
                   list:[],
                   id:this.$route.query.id,
                   val:1
                   }
           },
           methods:{
               
                 getdetails(){
                   // var id=this.$route.query.id;
                    var url="http://127.0.0.1:3000/goodsdetails";
                    url+="?id="+this.id;
                    this.$http.get(url).then(result=>{
                        this.list=result.body;
                        //console.log(this.list)
                    })   
                 },
                 getAdd(){
                      if(this.val>=1) this.val++; 
                 },
                 getSub(){
                     if(this.val>1) this.val--;
                 },
                 addCarTo(){
                     var id=this.$route.query.id;
                     var count=this.val;
                     var url="http://127.0.0.1:3000/addCar?id="+id+"&count="+count
                     this.$http.get(url).then(result=>{
                          if(result.body.code == 1){
							 //1.4:更新购物车中商品数量
                             //修改 Vuex共享数据
							 this.$store.commit("increment",count);
                              //共享不能刷新,
							 //localStore 浏览器自带对象
							 //永久保存             
							 Toast(result.body.msg);
						 }else{
							 Toast(result.body.msg);
						 }
                     })
                 }
           },
           created(){
              // console.log(this.$route.query.id)
              this.getdetails();
           }
       }
 
</script>

<style>
     .app-goodsdetails .mui-card .mui-card-header{
         height:300px;
     }
     .app-goodsdetails .mui-card .mui-card-header img{
         width:100%;
         height:90%;
     }
     .app-goodsdetails .mui-card .mui-card-content-inner .price{
          color:#FF5000;
          font-size:25px;
     }
      .app-goodsdetails .mui-card .mui-card-content-inner .price .moy{
          font-size:17px;
      }
       .app-goodsdetails .mui-card .mui-card-content-inner .pprice{
           text-decoration:line-through;
       }
       .app-goodsdetails .mui-card .mui-card-content-inner .promise{
           color:#FF5000;
           font-size:14px;
       }
        .app-goodsdetails .mui-card .mui-card-content-inner .btn{
            width:35px;
            height:20px;
            color:#fff;
            background:#FF5000;
            font-size:10px;
            padding:5px;
            margin-right:5px;
        }
         .app-goodsdetails .mui-card .mui-card-content-inner .title{
             font-weight:bold;
             font-size:18px;
         }
         .app-goodsdetails .mui-card .mui-card-content-inner .little{
             color:gray;
             font-size:13px;
         }
          .app-goodsdetails .mui-card .mui-card-content-inner .cu{
              margin:0;
              padding-left:0;
              list-style:none;
          }
           .app-goodsdetails .mui-card .mui-card-content-inner .cl{
               font-size:13px;
               margin-left:18px;
           }

         
</style>