<template>
    <div class="main">
        <div class="foot-item" :class="{active:isActive[0]}" @click="itemClick(0)">
            <div class="item-img" >
                <img src="../images/d_home.png" />
            </div>
            <div class="item-text">热映</div>
        </div>
        <div class="foot-item" :class="{active:isActive[1]}" @click="itemClick(1)">
            <div class="item-img">
                <img src="../images/d_book.png" />
            </div>
            <div class="item-text">搜影</div>
        </div>
        <div class="foot-item" :class="{active:isActive[2]}" @click="itemClick(2)">
            <div class="item-img">
                <img src="../images/d_radio.png" />
            </div>
            <div class="item-text">搜书</div>
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
    import router from '../router'
    import {mapState} from 'vuex'
    import store from '../store'

    export default{
        data(){
            return{
                isActive:[true,false,false,false],
                guideName:['mTime','searchMovie','searchBook','my']
            }
        },
        computed: mapState([
            // 映射 this.count 为 store.state.count
            'footGuideIndex'
        ]),
        methods:{
            itemClick(index){
                this.$store.commit('updateFootGuideIndex',index);
                router.push({name:this.guideName[index]});
            }
        },
        mounted(){

                //vue检测数组变动
                for(let index in this.isActive){
                    this.isActive.splice(index, 1, false);
                }
                this.isActive.splice(this.footGuideIndex, 1, true);
        }
    }
    
</script>

<style lang="scss" scoped>

    .active{
        color:red;
    }
    .main{
        background:rgb(102,255,204);
        position: fixed;
        bottom:0;
        right:0;
        left:0;
        display:flex;
        justify-content: space-around;
        width:100%;
        .foot-item{
            padding:.3rem 0 .2rem 0;
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