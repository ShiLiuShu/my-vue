<template>
    <div class="main">
        <div class="head"></div>
        <div class="sampleDetail">
            <div class="postImg">
                <img :src="movieDetail.basic.img"/>
            </div>
            <div class="text">
                <div class="title">
                    <p class="cn">{{movieDetail.basic.name}}</p>
                    <p class="en">{{movieDetail.basic.nameEn}}</p>
                </div>
                <div class="time">
                    {{movieDetail.basic.mins}}
                </div>
                <div class="type">
                    {{movieTypeStr}}
                </div>
                <div class="story">
                    {{movieDetail.basic.story}}
                </div>
            </div>
        </div>
    </div>
</template>
<script> 
    import {getMovieDetailById} from '../service/getData'
    import router from '../router';
    export default{
        data(){
            return{
                movieId:0,
                movieDetail:'',
                movieTypeStr:''
            }
        },
        mounted(){
            this.movieId=this.$route.params.movieId;
            console.log(this.$route.params.movieId);
            this.getMovieDetail(290,this.movieId);
        },
        methods:{
            async getMovieDetail(locationId,movieId){
                try{
                    let data=await getMovieDetailById(290,this.movieId);
                    this.movieDetail=data.data.data;
                    this.getMovieType();
                }catch(err){

                }
            },
            //获取电影的类型标签
            getMovieType(){
                var i=0;
                for(;i<this.movieDetail.basic.type.length;i++){
                    this.movieTypeStr+=this.movieDetail.basic.type[i]+" "
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $standFontSize:.3rem;

    div.main{
        padding:.5rem;
    }

    div.head{
        background-color: gray;
        height:2rem;
    }

    div.sampleDetail{
        display: flex;
        height:5rem;
        background-color: white;
        .postImg{
            height:100%;
            img{
                height:100%;
            }
        }
        .text{
            padding-left:.3rem;
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            div.title{
                p.cn{
                    margin:0;
                    padding:0;
                    font-size:.5rem;
                }
                p.en{
                    margin:0;
                    padding:0;
                    font-size:$standFontSize;
                }
            }
            div.time{
                font-size:$standFontSize;
            }
            div.type{
                font-size:$standFontSize;
            }
            div.story{
                font-size:$standFontSize;
            }
        }
    }
</style>