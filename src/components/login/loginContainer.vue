<template>
             <div class="app-login">
                    <div class="header">
                         <img src="http://127.0.0.1:3000/img/shuijiao.jpg" alt="">
                    </div>
                    <div class="content">
                         <div class="info">
                              <p class="pic"><img src="http://127.0.0.1:3000/img/untitled.png" alt=""></p>
                              <p class="put"><input type="text" placeholder="请输入用户名"></p>
                         </div>
                        <div class="info">
                              <p class="pic1"><img src="http://127.0.0.1:3000/img/untitled1.png" alt=""></p>
                              <p class="put"><input type="password" placeholder="请输入密码"></p>
                         </div>
                    </div>
                      <mt-button type="danger" size="large">登录 </mt-button>
                          <mt-button  size="large" >注册 </mt-button>
                    <div class="footer">
                        <a href="#">忘记密码？</a>
                        </div>
             </div>
</template>

<script>
export default {
    
}
</script>

<style>
       .app-login .header{
           width: 30%;
           height: 110px;
           border:1px solid #ddd;
           margin:20px 0 20px 35%;
           border-radius: 50%;
       }
       .app-login .header img{
           height: 100%;
           width: 100%;
             border-radius: 50%;
       }
      .app-login .content .info{
          display: flex;
      }
      .app-login .content .info .pic{
          width: 10%;
          height: 40px;
          margin-right: 10px;
      }
      .app-login .content .info .pic1{
          width: 8%;
          height: 28px;
          margin-right: 10px;
          margin-left: 6px;
      }
      .app-login .content .info .put{
          width: 85%;
      }
       .app-login .content .info .pic img{
           width: 100%;
           height: 100%; 
       }
        .app-login .content .info .pic1 img{
           width: 100%;
           height: 100%; 
       }

</style>


