<template>
   <div class="live">
       <player></player>
       <answer></answer>
       <barrage></barrage>
   </div>
</template>
<script>
import Player from '@/components/Player.vue'
import Answer from '@/components/Answer.vue'
import Barrage from '@/components/Barrage.vue'
export default {
      data() {
        return {
            msg:''
        }
      },
      components:{
          'player': Player,
          'answer': Answer,
          'barrage': Barrage
      }
}
</script>
<style scope>
     .live{
         overflow-x:hidden;
     }
</style>