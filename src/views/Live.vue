<template>
   <div class="home">
       <player></player>
   </div>
</template>
<script>
import Player from '@/components/player.vue'
export default {
      data() {
        return {
            msg:''
        }
      },
      components:{
          'player': Player
      }
}
</script>