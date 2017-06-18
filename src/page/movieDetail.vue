<template>
    <div class="main" >
        <div class="bg">
            <img :src="movieDetail.basic.img" />
        </div>
        <div class="head"></div>
        <div class="fixedHead" :style="styleObject">
            <div class="name">{{movieDetail.basic.name}}</div>
        </div>
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
            <!--阴影分割线-->
            <div class="divder"></div>
            <!--故事简介-->
            <div class="sample-story">
                <div class="text" :class="{'showSampleStoryAll':showSampleStoryAll}">{{movieDetail.basic.story}}</div>
                <div class="image" :class="{'sampleStoryAllImage':sampleStoryAllImage}" @click="swapSampleStory()">
                    <img src="../images/arrow.png" />
                </div>
            </div>
            <!--阴影分割线-->
            <div class="divder"></div>
            <div class="test" style="height:3000px;background:red"></div>
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
                movieTypeStr:'',
                showSampleStoryAll:false,
                sampleStoryAllImage:false,
                styleObject:{
                    opacity:0
                }
            }
        },
        mounted(){
            this.movieId=this.$route.params.movieId;
            console.log(this.$route.params.movieId);
            this.getMovieDetail(290,this.movieId);

            window.addEventListener('scroll',this.handleScroll);
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
            },
            //切换故事简介
            swapSampleStory(){
                this.showSampleStoryAll=!this.showSampleStoryAll;
                this.sampleStoryAllImage=!this.sampleStoryAllImage;
            },
            //处理滚轮事件弹出标题
            handleScroll(){
                let y=window.scrollY;
                let opacity=y/400<=1?y/400:1;
                console.log(opacity);
                this.styleObject.opacity=opacity;
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    $imgHeight:8rem;
    $side-margin-left:.4rem;
    $divder-height:.4rem;

    $box-shadow-gray:-2px -.8px 1px 1.5px gray ;
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
                height:100%;
                filter: blur(30px);
                //去掉img下方空隙
                display: block;
            }
            z-index: -99;
        }
        div.head{
            height:6rem;
        }
        div.fixedHead{
            position: fixed;
            top:0;
            left:0;
            right:0;
            height:3rem;
            background: darkblue;
            z-index: 99;
            display: flex;
            justify-content: center;
            align-items: center;
            .name{

            }
        }
        div.rate{
            position:absolute;
            display: flex;
            top:-.3rem;
            right:.8rem;
            width:1.0rem;
            height:1.0rem;
            background:green;
            color:white;
            justify-content: center;
            align-items: center;
            font-size:.6rem;
        }
        div.movie-all-content{
            position: relative;
            background: white;
            .divder{
                height:$divder-height;
                background-color: silver;
                box-shadow: $box-shadow-gray ;
            }
            .blank{
                height:$imgHeight - 1.9rem;
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
            div.sample-story{
                padding:.1rem 0;
                .text{
                    height:2.5rem;
                    font-size:.6rem;
                    overflow: hidden; 
                    margin:.6rem .6rem;  
                }

                .showSampleStoryAll{
                    height:auto;
                    font-size:.6rem;
                }

                .image{
                    margin-top:.2rem;
                    height:.5rem;
                    
                    img{
                        margin: 0 auto;
                        display: block;
                        height:80%;
                    }
                }
                .sampleStoryAllImage{
                    img{
                        transition: all 0.1s;
                        transform: rotate(180deg);
                    }
                }

            }
        }
    }
</style>