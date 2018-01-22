<template>
  <div id="answer">
      <div class="top">
         <span>用户昵称</span>
         <i v-if="display">{{time}}s</i>
         <span>364503剩余</span>
      </div>
      <div class="question" v-if="display">
        <h3 v-text="question[index].title"></h3>
        <ul>
          <li v-for = "(item) in question[index].options" @click="answer" :data-answer="item.result">
              {{item.option}}</li>
          <!-- <li  @click="answer" data-answer="true">+86</li>
          <li  @click="answer" data-answer="false">+61</li>
          <li  @click="answer" data-answer="false">+886</li> -->
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Answer',
  data(){
    return{
        time:'', // 单题答题倒计时
        index:0, // 第几道题
        // 答题集
        question:[
                {
                    "title":"中国大陆的国际区号是？",
                    "options":[
                        {
                            "option":"+86",
                            "result": "true"
                        },
                        {
                             "option":"+61",
                            "result": "false"
                        },
                        {
                             "option":"+886",
                            "result": "false"
                        }
                    ]
                },
                {
                    "title":"这是一个弱智的问题？",
                    "options":[
                        {
                            "option":"傻逼",
                            "result": "false"
                        },
                        {
                             "option":"弱智",
                            "result": "true"
                        },
                        {
                             "option":"智障",
                            "result": "false"
                        }
                    ]
                }
            ],
        display:false,
        answered:false
    }
  },
  mounted:function(){
    // 开启前等待
      this.pre();
  },
  methods:{
      // 答题前等待
      pre:function(){
          var that = this;
          setTimeout(function(){
             that.Loop();
          },1000*6)
      },
      // 单题答题倒计时
      timer:function(){
        this.time = 10;
        var that = this;
        var timer = window.setInterval(function(){
            that.time--;
            if(that.time <= 0){
               // 结束单题答题
               that.answered = true; 
               window.clearInterval(timer);
               // 暂停答题
               that.pause();
            }
        },1000)
      },
      // 回答单道题目  
      answer:function(event){
          console.log(event.target.dataset.answer);
          var answer = event.currentTarget.getAttribute("data-answer");
          if(!this.answered){
            if(answer == 'true'){
              this.answered = true;
              event.currentTarget.setAttribute("class","true");
            }else{
              this.answered = true;
              event.currentTarget.setAttribute("class","false");
           }
          }
      },
      // 控制单题显示
      Loop:function(){
          var that = this;
          // 显示题目
          that.display = true;
          // 开启单题答题倒计时
          if(that.display){
             that.timer();
          }
      },
     // 答题间隔
      pause:function(){
        var that = this;
        // 延时隐藏答题卡
        setTimeout(function(){
            that.display = false;
        },1000*10)
        // 延时开启下一题
        setTimeout(function(){
        that.display = true;
        that.index++;
        if(that.index <= 1){
            that.Loop();
        }
        },1000*10);
      }
  }
}
</script>
<style scope>
    #answer{
        width:100%;
        position:absolute;
        background:#fefefe;
    }
    #answer:after{
        width: 100%;
        height: 60px;
        position: absolute;
        left: 0;
        top:100%;
        z-index: 0;
        content: '';
        border-radius: 0 0 50% 50%;
        background:#fff;
    }
    #answer .top{
        width:100%;
        height:50px;
        line-height:50px;
        display:flex;
        justify-content:space-around;
    }
    #answer .top i{
        width:40px;
        height:40px;
        line-height:40px;
        margin-top:10px;
        background:#999;
        border-radius:50%;
    }
    #answer h3{
        width:80%;
        margin:10px auto;
    }
    #answer ul{
        width:80%;
    }
    #answer ul li{
         height:30px;
         line-height:30px;
         text-align:left;
         margin:10px 0;
         padding:0 20px;
         list-style:none;
         border:1px solid #999;
         border-radius:20px;
     }
    #answer ul li.true{
        color:#fff;
        background:green;
    }
     #answer ul li.false{
        color:#fff;
        background:red;
     }
</style>