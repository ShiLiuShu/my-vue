<template>
    <div class="allHead">
        <div class="allHead-title">
            <p>{{title}}</p>
        </div>
        <div class="allHead-all">
            <p>全部</p>
        </div>
        <div class="allHead-arrow">
            <img src="../images/arrow_right.png" >
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    props:['title']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .allHead{
        padding:.4rem .3rem;
        display:flex;
        align-items: center;
        font-size: .4rem;
        .allHead-title{
            flex-grow: 1;
            text-align: left;
        }
        .allHead-all{
            color:silver;         
        }
        .allHead-arrow{
            margin-left: .1rem;
            img{
                width: .3rem;
                display: block;
            }
        }   
    }
</style>
