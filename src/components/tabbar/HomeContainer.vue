<template>
   <div  class="app-homeContainer">
      <!--顶部导航条 1：-->
      <mt-header fixed title="随购商城"></mt-header>
      <!--轮播图    2：-->
      <mt-swipe  :auto="2000" :show-indicators="false">
        <mt-swipe-item>
           <img src="https://aecpm.alicdn.com/tps/i1/TB1r4h8JXXXXXXoXXXXvKyzTVXX-520-280.jpg" />
        </mt-swipe-item>
        <mt-swipe-item>
           <img src="https://aecpm.alicdn.com/tps/i2/TB10vPXKpXXXXacXXXXvKyzTVXX-520-280.jpg" />
        </mt-swipe-item>
        <mt-swipe-item>
           <img src="//m.360buyimg.com/babel/jfs/t1/5744/7/13245/81594/5bd6c708E6e247283/8f402775975506db.jpg" />
        </mt-swipe-item>
        <mt-swipe-item>
             <img src="//img.alicdn.com/tps/i4/TB1FbeRlbPpK1RjSZFFwu15PpXa.png_q90_.webp" />
        </mt-swipe-item>
      </mt-swipe>
      <!--六宫格 3：-->
         <ul class="mui-table-view mui-grid-view mui-grid-9">
              
		          
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <!--a  @click.stop.prevent="jumpShop()"-->
                 <router-link to="/home/goodslist">
                   <img src="../../img/menu2.png" />
                   <div class="mui-media-body">商品</div>
                 </router-link>        
                 <!--/a-->
                 </li>
		             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                    <img src="../../img/menu3.jpg" />
		                    <div class="mui-media-body">购物车</div></router-link></li>
                 <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                      <router-link href="#" to="/home/goodslist">
		                  <img src="../../img/menu6.png" />
		                  <div class="mui-media-body">商品列表</div></router-link></li>
		             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/menu4.jpg" />
		                    <div class="mui-media-body">旅行</div></a></li>
		             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../img/menu5.png" />
		                    <div class="mui-media-body">学习</div></a></li>
		              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                      <router-link to="/home/newslist">
		                     <img src="../../img/menu1.png" />
		                   <div class="mui-media-body">新闻资讯</div>
                     </router-link>
                  </li>
		       </ul>
           <div  v-for="item of list" :key="item.id">
             <div class="tab">
                <span class="tx"></span>
                   <span class="bar">{{item.bar}}</span>
                <span class="tx"></span>
             </div>
           <div class="card">
            <div class="plist">
                        <div class="title">
                           <span class="before">{{item.title}}</span>
                           <span class="after">{{item.content}}</span>
                        </div>
                        <div class="prof">
                            <router-link to="/home/goodslist"><img :src="item.img_url" alt=""></router-link>
                        </div> 
                        <div class="prof">
                             <div class="pros">
                                <router-link to="/home/goodslist"><img :src="item.s_img1" alt=""></router-link>
                             </div>
                              <div class="pros">
                               <router-link to="/home/goodslist"><img :src="item.s_img2" alt=""></router-link> 
                             </div>
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
           list:[]
    }},
     methods:{
       getInfo(){
          var url="http://127.0.0.1:3000/cardImg"
          this.$http.get(url).then(result=>{
              this.list=result.body;
              console.log(this.list);
          })
       }
     },
     created(){
       this.getInfo();
     }
  }
</script>
<style>
   .app-homeContainer header.mint-header{
        background:#e83632;
    }
  /*图片轮播设置高度*/
  .app-homeContainer .mint-swipe{
    height:150px;
  }
  .app-homeContainer .mint-swipe img{
    width:100%;
  }
  .app-homeContainer h1.mint-header-title{
      font-size:20px;
  }
   /*调整六宫格  */
  .app-homeContainer .mui-grid-view.mui-grid-9{
    background:#fff;
    border:0;
   
  }
  .app-homeContainer .mui-grid-view.mui-grid-9 img{
    width:40px;
    height:40px;
  }
  .app-homeContainer .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size:13px;
  }
  /*导航条*/
  .app-homeContainer .tab{
    height: 40px;
    background: #dedede;
    text-align: center;
    font-size: 16px;
    padding-top: 12px;
    color: #33CC99;
  }
  .app-homeContainer .tab .tx{
    display: inline-block;
    width: 30px;
    height: 1px;
    margin-bottom:5px;
    background: #000;
  }
  .app-homeContainer .tab .bar{
     display: inline-block;
     margin: 0 20px 0 20px;
  }

  /*card布局*/
  .app-homeContainer .card{
    width: 100%;
   flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
  }
  .app-homeContainer .plist{
     width: 100%;
     height: 380px;
      padding-top:2%;
     margin-top: 10px;
     background: #fff;
    padding-left: 6%;
    
   
  }
  .app-homeContainer .plist .prof{
     width: 94%;
     height: 45%; 
     
      margin-top:4px;
      display: flex;
      justify-content: space-between;
  }
  .app-homeContainer .plist .pros{
    width: 49%;
    height: 100%;
  
  }
  .app-homeContainer .plist img{
      width: 100%;
      height: 100%;
  }
  .app-homeContainer .plist .pros img{
      width: 100%;
      height: 100%;
  }
  .app-homeContainer .plist .title .before{
     font-size: 20px;
     font-weight: bold;
    display:inline-block;
    
  }
  .app-homeContainer .plist .title .after{
     font-size: 13px;
    
    display:inline-block;
    margin-left: 15px;
    
  }
  
  
</style>