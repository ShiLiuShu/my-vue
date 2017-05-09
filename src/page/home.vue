<template>
    <div class="main">
        <div class="div1">
            <p>this is the {{title}} page</p>

        </div>
        <router-view></router-view>
        <foot-guide></foot-guide>
    </div>
    
</template>

<script>
    import {name,age} from './test-by'
    import footGuide from '../components/FootGuide'


    export default{
        data(){
            return{
                title:'home'
            }
        },
        methods:{
            async start() {
                    // 在这里使用起来就像同步代码那样直观
                    console.log('start');
                    await this.sleep(3000);
                    console.log('end');
                    this.title="homeeee";
                    name("yhh");
                },
              sleep(time) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            resolve();
                        }, time);
                    })
                }
               
            
            
        },
        mounted(){
            this.start();
        },
        components:{
            footGuide
        }
    }
</script>

<style lang="scss" scoped>
    $myColor:black;
    $bgColor:rgba(0,225,0,.5);
    $w:10rem;
    $h:25rem;

    .main{      
        margin:0 auto;
    }

    .div1{
        width:$w;
        height:$h;
        text-align:center;
        p{
            font-size:1rem;
            color:$myColor;
        }       
    }

</style>