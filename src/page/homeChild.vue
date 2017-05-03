<template>
    <p>this is the {{title}} page.</p>
</template>

<script>
    export default{
        data(){
            return{
                title:'homeChild'
            }
        }
    }
</script>

<style  scoped>

    p{
        color:red;
    }
</style>