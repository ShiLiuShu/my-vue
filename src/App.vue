<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}



</script>

<style lang="scss">
html{
  font-size:62.5%;
}

body{
  padding:0;
  margin:0;
  background: rgba(0, 0, 0, 0.7);
  display:flex;
  flex-direction:column;
  justify-content: center;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-bottom: 3rem;
  overflow: auto;
}



</style>
