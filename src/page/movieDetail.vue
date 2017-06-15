<template>
    <div class="main" >
        <div class="bg">
            <img :src="movieDetail.basic.img" />
        </div>
        <div class="head"></div>
        <div class="movie-all-content">
            <div class="rate">7.7</div>
            <div class="movie-float-sample-content">
                <div class="postImg">
                    <img :src="movieDetail.basic.img" />
                </div>
                <div class="sample-content-text">
                    <div class="content-text-up">
                        <div class="up-cn">{{movieDetail.basic.name}}</div>
                        <div class="up-en">{{movieDetail.basic.nameEn}}</div>
                    </div>
                    <div class="content-text-down">
                        <div class="time">{{movieDetail.basic.mins}}</div>
                        <div class="type">{{movieTypeStr}}</div>
                        <div class="playtime">{{movieDetail.basic.releaseDate}}</div>
                        <div class="tag">
                            <ul>
                                <li>中国巨幕</li>
                                <li>iMax大厅</li> 
                            </ul>                                                     
                        </div>
                    </div>
                </div>
            </div>
            <div class="blank"></div>
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
    $imgHeight:8rem;
    $side-margin-left:.4rem;
    // :style="{background:'url('+movieDetail.basic.img+')'+ ' no-repeat 0 0'+'/100% 100%'}"
    div.main{
        position: relative;
        padding:0;
        margin:0;
        width:100%;
        div.bg{
            position: absolute;
            top: 0;
            left:0;
            bottom:0;
            right:0;
            img{
                width:100%;
                filter: blur(30px);
            }
            z-index: -99;
        }
        div.head{
            height:6rem;
        }
        div.rate{
            position:absolute;
            display: flex;
            top:-.8rem;
            right:.8rem;
            width:1.5rem;
            height:1.5rem;
            background:green;
            color:white;
            justify-content: center;
            align-items: center;
            font-size:.6rem;
        }
        div.movie-all-content{
            position: relative;
            background: white;
            height:30rem;
            .blank{
                height:$imgHeight - 1.9rem;
                border-bottom: solid .3rem silver;
            }
            .movie-float-sample-content{
                position:absolute;
                display: flex;
                top:-2.5rem;
                left:.5rem;
                .postImg{
                    border:solid white .1rem;
                    img{
                        height:$imgHeight;
                    }
                }
                .sample-content-text{
                    .content-text-up{
                        height:2.5rem;
                        margin-left:$side-margin-left;
                        color:white;
                        text-align: left;
                        .up-cn{
                            font-size: .8rem;
                        }
                        .up-en{
                            font-size:.6rem;
                        }
                    }
                    .content-text-down{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        color:black;
                        margin-left:$side-margin-left;
                        height:$imgHeight - 2.5rem;
                        div{
                            text-align: left;
                            font-size:.6rem;
                            ul{
                                margin:0;
                                padding:0;
                            }
                            li{
                                font-size:.3rem;
                                display: inline;
                                list-style: none;
                                border-radius: .05rem;
                                border: solid gray .03rem;
                            }
                        }
                    }
                }
            }
        }
    }
</style>