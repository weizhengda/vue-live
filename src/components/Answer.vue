<template>
  <div id="answer">
      <h3>中国大陆的国际区号是？</h3>
      <ul>
          <li>+86</li>
          <li>+61</li>
          <li>+886</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Answer',
  data(){
    return{
        app:'',
    }
  }
}
</script>
<style scope>
    #answer{
        width:100%;
        height:30%;
        position:absolute;
        background:#fefefe;
    }
    #answer:after{
        width: 140%;
        height: 100px;
        position: absolute;
        left: -20%;
        top:100%;
        z-index: 0;
        content: '';
        border-radius: 0 0 50% 50%;
        background:#fff;
    }
</style>