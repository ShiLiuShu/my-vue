<template>
    <div class="main">
        <div class="foot-item" :class="{active:isActive[0]}" @click="itemClick(0)">
            <div class="item-img" >
                <img src="../images/d_home.png" />
            </div>
            <div class="item-text">首页</div>
        </div>
        <div class="foot-item" :class="{active:isActive[1]}" @click="itemClick(1)">
            <div class="item-img">
                <img src="../images/d_book.png" />
            </div>
            <div class="item-text">书影音</div>
        </div>
        <div class="foot-item" :class="{active:isActive[2]}" @click="itemClick(2)">
            <div class="item-img">
                <img src="../images/d_radio.png" />
            </div>
            <div class="item-text">广播</div>
        </div>
        <div class="foot-item" :class="{active:isActive[3]}" @click="itemClick(3)">
            <div class="item-img">
                <img src="../images/d_my.png" />
            </div>
            <div class="item-text">我的</div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                isActive:[true,false,false,false]
            }
        },
        methods:{
            itemClick(index){
                //vue检测数组变动
                for(let index in this.isActive){
                    this.isActive.splice(index, 1, false);
                }
                this.isActive.splice(index, 1, true);
            }
        }
    }
    
</script>

<style lang="scss" scoped>

    .active{
        color:red;
    }
    .main{
        position: fixed;
        bottom:.2rem;
        right:0;
        left:0;
        display:flex;
        justify-content: space-around;
        width:100%;
        .foot-item{
            .item-img{
                img{
                    height:1.2rem;
                }
            }
            .item-text{
                font-size:.4rem;
            }
        }
    }
    p{
        margin:0;
    }
</style>