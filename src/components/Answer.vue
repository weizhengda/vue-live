<template>
  <div id="answer">
      <div class="top">
         <span>用户昵称</span>
         <i>{{time}}s</i>
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
        app:'',
        time:'',
        index:0,
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
        display:true,
        answered:false
    }
  },
  mounted:function(){
      console.log(this.question)
      if(this.display){
          this.timer();
      }
  },
  methods:{
      timer:function(){
        this.time = 10;
        var that = this;
        var timer = window.setInterval(function(){
            that.time--;
            if(that.time <= 0){
               // 结束答题
               that.answered = true; 
               window.clearInterval(timer);
            }
        },1000)
      },
      // 处理单道题目  
      answer:function(event){
          console.log(event);
          console.log(event.target.dataset.answer);  // 这个才是答案的正确与否   是后台给你的 你无权定义
          var answer = event.currentTarget.getAttribute("data-answer");
          this.index++;  // 这李只需要判断  是否是最后一题  最后一题  就不要++了
        //   if(!this.answered){
        //     if(answer == 'true'){
        //       this.answered = true;
        //       event.currentTarget.setAttribute("class","true");
        //     }else{
        //       this.answered = true;
        //       event.currentTarget.setAttribute("class","false");
        //    }
        //   }
      }
  }
}
</script>
<style scope>
    #answer{
        width:100%;
        height:35%;
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