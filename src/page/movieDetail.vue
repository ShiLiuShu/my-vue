<template>
    <div class="main" >
        <div class="bg">
            <img :src="movieDetail.basic.img" >
        </div>
        <div class="head"></div>
        <div class="fixedHead" :style="styleObject">
            <div class="name">{{movieDetail.basic.name}}</div>
        </div>
        <div class="movie-all-content">
            <div class="rate">7.7</div>
            <div class="movie-float-sample-content">
                <div class="postImg">
                    <img :src="movieDetail.basic.img" >
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
                    <img src="../images/arrow.png" >
                </div>
            </div>
            <!--阴影分割线-->
            <div class="divder" style="position:relative">
                <div class="actor-all" style="font-size:.6rem"><p>全部</p><img src="../images/arrow_right.png" ></div>
            </div>
            <div class="DirectorAndActor">
                <div class="director-head">
                    
                    <div style="margin-left:.5rem">导演</div>
                    <div style="margin-left:4rem">主要演员</div>
                </div>
                <div class="content">
                    <div class="director">
                        <div class="image">
                            <img :src="director.img" >
                        </div>
                        <div class="nameCn">{{director.name}}</div>
                        <div class="nameEn">{{director.nameEn}}</div>
                    </div>
                    <div class="line"></div>
                    <div class="actor" v-for="actor in actors" :key="actor.id">
                        <div class="image">
                            <img :src="actor.img" >
                        </div>
                        <div class="nameCn">{{actor.name}}</div>
                        <div class="nameEn">{{actor.nameEn}}</div>
                        <div class="nameEn">饰:{{actor.roleName}}</div>
                    </div>
                </div>
            </div>
            <div class="divder"></div>
            <div class="live">
                <div class="live-head">
                    <p>直播</p>
                    <div><p>{{liveInfo.count}}</p><img src="../images/arrow_right.png"></div>
                </div>
                <div class="live-content">
                    <div class="live-content-image">
                        <img :src="liveInfo.img" >
                    </div>
                    <div class="live-content-text">
                        <p class="title">{{liveInfo.title}}</p>
                        <p class="orange">{{liveInfo.playTag}}</p>
                        <p>{{liveInfo.playNumTag}}</p>
                    </div>
                </div>
            </div>
            <div class="files" >
                <div class="videos">
                    <div class="text">
                        <div>视频</div>
                        <div style="margin-right:.1rem"><p>{{videos.count}}</p></div>
                        <div><img src="../images/arrow_right.png"></div>
                    </div>
                    <div class="image">
                        <div class="divd"></div>
                        <img :src="videos.img">
                    </div>
                </div>
                <div class="pictures">
                    <div class="text">
                        <div>图片</div>
                        <div style="margin-right:.1rem"><p>{{stageImage.count}}</p></div>
                        <div><img src="../images/arrow_right.png"></div>
                    </div>
                    <div class="image">
                        <img :src="stageImage.list[0].imgUrl">
                    </div>
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
                movieTypeStr:'',
                showSampleStoryAll:false,
                sampleStoryAllImage:false,
                styleObject:{
                    opacity:0
                },
                director:'',
                actors:'',
                live:{},
                files:{}
            }
        },
        computed:{
            liveInfo:function(){
                return this.movieDetail.live||{};
            },
            videos:function(){
                return this.movieDetail.basic.video||{};
            },
            stageImage:function(){
                return this.movieDetail.basic.stageImg||{}
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
                    this.getActorsInfo();
                    //this.getLiveInfo();
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
                this.styleObject.opacity=opacity;
                
            },
            //获取演员及导演信息
            getActorsInfo(){
                this.actors=this.movieDetail.basic.actors;
                this.director=this.movieDetail.basic.director;
            },
            //获取直播信息
            getLiveInfo(){
                
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
        scrollbar-base-color: transparent;
        scrollbar{
            width:0;
        }

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
            background: #283853;
            z-index: 99;
            display: flex;
            justify-content: center;
            align-items: center;
            color:white;
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
        .actor-all{
            position: absolute;
            top:.6rem;
            right:.2rem;  
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                display: block;
                margin-left:.1rem;
                width:.4rem;
            }            
        }
        div.movie-all-content{
            position: relative;
            background: white;

            .files{
                display: flex;
                padding-top:.5rem;
                justify-content: center;
                align-items: center;
                .videos{
                    flex:0.6;
                    padding:0 .3rem .2rem .3rem;
                    .text{
                        font-size: .4rem;
                        display: flex;
                        align-items: center;
                        div:first-child{
                            flex-grow: 1;
                            text-align: left;
                        }
                        img{
                            height:.3rem;
                        }
                    }
                    .image{
                        margin-top:.2rem;
                        width:100%;
                        height:3.5rem;
                        position: relative;
                        .divd{
                            position:absolute;
                            top:0;
                            right:-.3rem;
                            height:3.5rem;
                            border-left:solid black .01rem;
                        }
                        img{
                            display: block;
                            width:100%;
                            height:100%;
                        }
                    }

                }
                
                .pictures{
                    flex:0.4;
                    padding:0 .3rem .2rem .3rem;
                    .text{
                        font-size: .4rem;
                        display: flex;
                        align-items: center;
                        div:first-child{
                            flex-grow: 1;
                            text-align: left;
                        }
                        img{
                            height:.3rem;
                        }
                    }
                    .image{
                        margin-top:.2rem;
                        width:100%;
                        height:3.5rem;
                        img{
                            display: block;
                            width:100%;
                            height:100%;
                        }
                    }
                }
            }

            .live{
                margin-left:.3rem;
                height:5rem;
                .live-head{
                    height:1.2rem;
                    padding:0.2rem 0;
                    text-align: left;
                    p{
                        font-size:.6rem;
                    }
                    
                    :first-child{
                        float: left;
                    }
                    div{
                        float:right;
                        color:gray;
                        margin-right:.2rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        img{
                            display: block;
                            margin-left:.1rem;
                            width:.25rem;
                        }
                    }
                }
                .live-content{
                    display: flex;
                    padding-bottom:.3rem;
                    
                    .live-content-image{
                        img{
                            width:5rem;
                            height:2.5rem;
                        }
                        
                    }
                    .live-content-text{
                        margin-left: .3rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        p{
                            margin:0;
                            padding:0;
                            font-size: .4rem;
                            text-align: left;
                        }
                        .title{
                            font-size: .5rem;
                        }
                        .orange{
                            color:orange;
                        }
                    }
                }
                border-bottom: solid 0.04rem silver;
            }

            .DirectorAndActor{
                overflow: auto;
                .director-head{
                    position: relative;
                    height:1rem;
                    margin-top:.2rem;
                    font-size:.6rem;
                    color:gray;
                    text-align: left;
                    div{
                        display: inline;
                    }
                    
                }
                .line{
                    height:3.5rem;
                    border-left:solid gray .05rem;
                    margin:.2rem .5rem 0;
                }
                .content>div{
                    margin:.2rem .4rem .4rem;
                }
                .content{
                    display: flex;
                    color:black;
                    font-size:.4rem;
                    justify-content: flex-start;
                    .director{   
                        .image{
                            height:3.5rem;
                            overflow: hidden;
                            img{
                                width:3.5rem;
                            }
                        }
                    }
                    .actor{
                        .image{
                            height:3.5rem;
                            overflow: hidden;
                            img{
                                width:3.5rem;
                            }
                        }
                        
                    }
                }
            }
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