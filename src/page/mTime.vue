<template>
    <div class="main">
        <div class="isSellingTicket">
            <div class="selling_title">
                <p class="p1">正在售票</p>
                <p class="p2">{{isSellingTicketCount}}部</p>
            </div>
            <div class="isSellingGallery">
                <div class="isSellingItem" v-for="item in isSellingTicketMovies">
                    <div class="item-image" @click="goToMovieDetailPage(item.movieId)"> 
                        <img :src="item.img" />
                    </div>
                    <div class="item-title">
                        <p>{{item.titleCn}}</p>
                    </div>
                </div>
            </div>
        </div>
        <footGuide></footGuide>
    </div>
</template>

<script>
    import router from '../router';
    import footGuide from '../components/FootGuide'
    import {getHotMovies,getBookById,getHotMoviesP,getIsSellingMovies} from '../service/getData'
    export default{
        data(){
            return {
                isSellingTicketCount:0,
                isSellingTicketMovies:[]
            }
        },
        components:{
            footGuide
        },
        mounted(){
             this.getSellingMovies();
        },
        methods:{
            async searchHotMovies(){
                 console.log('start');
                    try{
                        let data=await getHotMovies(290);
                        //let data=await getBookById(3332698);
                        let movieData=data.data;
                        console.log(movieData);
                    }catch(err){
                    }  
            },
            //获取正在售票的电影
            async getSellingMovies(){
                try{
                    let data=await getIsSellingMovies();
                    let movieData=data.data;
                    //获取正在售票的数据
                    this.isSellingTicketCount=movieData.count;
                    this.isSellingTicketMovies=movieData.movies;
                }catch(err){

                }
            },
            //点击图片进入影片详情页
            goToMovieDetailPage(movieId){
                router.push({name:'movieDetail',params:{movieId:movieId}});

            }

        }

        

    }
</script>

<style lang="scss" scoped>
    .isSellingTicket{
        padding:.3rem;
        .selling_title{
            height:2rem;
        }
        .p1{
            font-size: .5rem;
            float:left;
        }

        .p2{
            font-size:.4rem;
            float:right;
        }

        .isSellingGallery{
            overflow: auto;
            display: flex;
            flex-direction: row;

            .isSellingItem{
                font-size:.5rem;
                .item-image{
                    padding:.3rem;
                    img{
                        width:5rem;
                        height:7.5rem;
                    }
                }
            }
        }
    }
</style>