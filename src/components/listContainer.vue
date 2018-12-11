<template>
        <div id="app">
           <h1>ç”¨æˆ·åˆ—è¡¨</h1>
             <ul>
               <li v-for="i of list" :key="i.lid">{{i.lid}}:{{i.name}}:{{i.age}}</li>
             </ul>
        </div>
</template>
<script>
      export default{
          data(){
              return {list:[{lid:1,name:"dongdong",age:33},
              {lid:2,name:"yaner",age:23},
              {lid:3,name:"wenhua",age:43}]}
          }
      }

</script>
<style>
    #app ul{
        list-style:none;
        
    }
</style>