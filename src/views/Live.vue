<template>
   <div class="live">
       <player></player>
       <answer></answer>
   </div>
</template>
<script>
import Player from '@/components/Player.vue'
import Answer from '@/components/Answer.vue'
export default {
      data() {
        return {
            msg:''
        }
      },
      components:{
          'player': Player,
          'answer': Answer
      }
}
</script>
<style scope>
     .live{
         overflow-x:hidden;
     }
</style>