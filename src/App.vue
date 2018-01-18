<template>
  <div id="app">
     <keep-alive>
      <router-view/>
     </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  margin:0;
  padding:0;
  background:#f1f1f1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
