<template>
    <div class="main">
        <div class="div1">
            <p>this is the {{title}} page</p>

        </div>
        <router-view></router-view>
    </div>
    
</template>

<script>
    export default{
        data(){
            return{
                title:'home'
            }
        }
    }
</script>

<style lang="scss" scoped>
    $myColor:blue;
    $bgColor:rgba(255,0,0,.1);
    $w:10rem;
    $h:7rem;

    .main{
        margin:0 auto;
        
    }

    .div1{
        width:$w;
        height:$h;
        text-align:center;
        background:$bgColor;
        p{
            font-size:.5rem;
            color:$myColor;
        }
    }

</style>