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
  background: rgba(0,225,0,.2);
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display:flex;
  flex-direction:column;

  
  

}



</style>
