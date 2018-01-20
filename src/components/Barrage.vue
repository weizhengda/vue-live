<template>
    <div class="barrage">
        <div class="box">
             <ul>
               <li v-for="item in barrage">{{item}}</li>
            </ul>
        </div>
        <div class="input">
             <input type="text" v-model="input">
             <button @click="send">发送弹幕</button>
        </div>
    </div>
</template>
<script>
   export default{
       name:'',
       data(){
           return{
               barrage:[],
               input: '',
           }
       },
       methods:{
           send:function(){
                this.barrage.push(this.input);
           }
       }
   }
</script>
<style scope>
     .barrage{
         width:100%;
         position:absolute;
         top:64%;
         left:0;
     }
     .barrage .box{
         width:100%;
         height:198px;
         color:#fff;
     }
     .barrage .box ul li{
         list-style:none;
         height:20px;
         line-height:20px;
         text-align:left;
     }
     .barrage .input input{
        width:60%;
     }
     .barrage .input button{
        width:20%;
        margin-left:5%;
     }
</style>
