<template>
        <div class="app-shopCar">
				<div class="container" v-for="item of list" :key="item.id">
					<div class="app-item">
						     <div><img :src="item.pic" alt=""></div>
                             <div class="title">{{item.title}}</div>
                             <div class="price">价格:{{item.price.toFixed(2)}}</div>
                             <div class="page">
                                   <span>数量:</span>
                                   <div class="mui-numbox">
					               <button class="mui-btn mui-btn-numbox-minus" type="button" @click="getSub">-</button>
					               <input class="mui-input-numbox" type="number" value="1" v-model="count"/>
					               <button class="mui-btn mui-btn-numbox-plus" type="button" @click="getAdd">+</button>
                            </div>
                            <div class="total">
                              <span>小计:</span>
                              <span class="pc">￥{{item.price.toFixed(2)*count}}</span>
                              <span class="button">
                                  <button class="btn">结算</button>
                              </span>
                             </div>
                             </div> 
					</div>
				</div>
        </div>
</template>

<script>
     export default {
            data(){
                return {
                    list:[],
                    id:this.$route.query.id,
                    count:this.$route.query.count
                }
            },
            methods:{
            getinfo(){
                var url="http://127.0.0.1:3000/goodsdetails?id="+this.id
                this.$http.get(url).then(result=>{
                  this.list=result.body;
                })
             },
              getAdd(){
                      if(this.count>=1) this.count++; 
                 },
                 getSub(){
                     if(this.count>1) this.count--;
                 }
            },
            created(){
              this.getinfo();
                
            }
           
     }
</script>

<style>
          .app-shopCar .container .app-item{
              height: 230px;
              background: #fff;
              position: relative;
          }
           .app-shopCar .container .app-item img{
               height: 120px;
              width: 40%; 
           }
           .app-shopCar .container .app-item .title{
               position: absolute;
               top:20px;
               left:170px;
               font-weight: bold;
           }
           .app-shopCar .container .app-item .price{
               position: absolute;
               top:70px;
               left: 170px;
               font-size: 15px;
               color: #FF5000;
           }
           .app-shopCar .container .app-item .page{
               margin:10px 5px ;
           }
           .app-shopCar .container .app-item .total{
               margin-top:10px;
           }
           .app-shopCar .container .app-item .total .pc{
                display: inline-block;
                width: 150px;
           }
           .app-shopCar .container .app-item .total .button{
               margin-left: 100px;
                                  
           }
           .app-shopCar .container .app-item .total .button .btn{
               background: #FF5000;
               color: #fff;
               border-radius: 20%;
           }
</style>


