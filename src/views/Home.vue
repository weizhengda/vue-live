<template>
   <div class="home">
       <h3>正在进行</h3>
       <div class="top">
          <router-link to="/live">进入直播间</router-link>
          <span>|</span>
          <i>￥50000.00 奖金</i>
      </div>
      <div class="user">
          <div class="user-name">用户昵称</div>
          <div class="money">
                <p>我的零钱</p>
                <p>￥100元</p>
          </div>
          <div class="life">
             <span>复活次数</span><i>*</i><span>加复活次数</span>
          </div>
      </div>
      <div class="invite">邀请好友</div>
   </div>
</template>
<script>
   export default {
      data() {
        return {
            msg:''
        }
      }
}

</script>
<style scope>
  h3{
      margin:50px auto;
  }
  .user{
      width:80%;
      height:auto;
      margin:40px auto;
      padding:20px 0;
      border:1px solid #999;
      border-radius:10px;
      background:#fff;
  }
  .life{
      display:flex;
      justify-content:space-around;
  }
  .invite{
      width:80%;
      height:50px;
      line-height:50px;
      margin:100px auto;
      text-align:center;
      background:#fff;
      border:1px solid #999;
      border-radius:5px;
  }
</style>