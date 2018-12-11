<template>
       <div class="app-goodslist">
                 <div class="goodsitem" v-for="item of list" :key="item.id">
                  <router-link :to="'/home/goodsdetails?id='+item.pid">
					   <a href="#"><img :src="item.pic" /></a>
                         <p class="title">{{item.title}}</p>
                         <p class="price">
                          <button>嘉年华</button>
                           <span>￥</span>
                           <span class="math">{{item.price}}</span>
                         </p>
                         <p class="pprice">
                         价格 :
                          <span>￥{{item.pprice}}</span>
                         </p>
                       
                         <p class="btn">
                            <button>进店享优惠</button>
                            <button class="btn2">
                               立即抢购
                            </button>
                         </p>
                       </router-link>     
                 </div>
                 <mt-button type="danger" size="large" @click="getMore">加载更多 </mt-button>
             
       </div>
</template>

<script>
        export default{
            data(){
                return { 
                    list:[],
                    pageSize:4,
                    pageIndex:0,  //当前页数
                     hasMore:true,     //是否存在下一页数据
                     pageCount:2,      //总页数        
              }
            },
            methods:{
                 getMore(){
                     this.pageIndex++;
                     this.hasMore=this.pageIndex<=this.pageCount;
                     if(!this.hasMore){return};
                     var url="http://127.0.0.1:3000/goodslist"
                     url+="?pno="+this.pageIndex+"&pageSize="+this.pageSize
                     this.$http.get(url).then(result=>{
                           var rows=this.list.concat(result.body.data)
                           this.list=rows;
                           //保存总页数
                           this.pageCount=result.body.pageCount;
                          // console.log(this.list);
                     })
                 } 
            },
            created(){
                this.getMore();
            }
        }
 
</script>



<style>
  .app-goodslist{
       display:flex;     /*最外层设置弹性布局*/
     flex-wrap:wrap;   /*子元素换行*/
     justify-content:space-between;/*两端对齐*/
     padding:7px;      /*为子元素内补丁*/
  }
       .app-goodslist div.goodsitem{
           width:49%;
           height:300px;
           border:1px solid #fff;
           background:#fff;
       }
        .app-goodslist div.goodsitem a img{
            width:100%;
            height:150px;
        }
        .app-goodslist div.goodsitem .title{
            font-size:12px;
            margin-left:10px;
            color:black;
        }
        .app-goodslist div.goodsitem .price button{
              width:48px;
              height:20px;
              font-size:12px;
              font-weight:bold;
              color:#fff;
             padding:1.5px 1px;
              border-radius:15% 15%;
              margin-left:10px;
              background:#FF5000;
        }
        .app-goodslist div.goodsitem .price span.math{
            font-size:20px;
            font-weight:bold;
            color:#FF5000;
           
        }
        .app-goodslist div.goodsitem .price span{
            font-size:12px;
            font-weight:normal;
              color:#FF5000;
              line-height:20px;
            
        }
        .app-goodslist div.goodsitem .pprice{
            font-size:12px;
            margin-left:10px;
        }
        .app-goodslist div.goodsitem .pprice span{
            text-decoration:line-through;
        }
          .app-goodslist div.goodsitem .btn button{
              width:79px;
              height:30px;
              font-size:12px;
              margin-left:7px;
              color:#FF5000;
          }
            .app-goodslist div.goodsitem .btn .btn2{
                 color:#fff;
                 background:#FF5000;
           
            }
        

       

</style>