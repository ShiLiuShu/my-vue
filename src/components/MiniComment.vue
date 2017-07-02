<template>
    <div class="mini-comment-root">
        <div class="mini-comment-avatar">
            <img :src="commentDetail.headImg" >
        </div>
        <div class="mini-comment-text">
            <div class="mini-comment-text-title">
                <div class="mini-comment-text-title-item1">
                    <p>{{commentDetail.nickname}}</p>
                </div>
                <div class="mini-comment-text-title-item2">
                    <p>评{{commentDetail.rating}}</p>
                </div>
            </div>
            <div class="mini-comment-text-content">
                <p>{{commentDetail.content}}</p>
            </div>
            <div class="mini-comment-text-time">
                <p>44分钟前</p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    props:['commentDetail']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .mini-comment-root{
        font-size: .4rem;
        margin:.1rem .2rem;
        display: flex;
        border-bottom: gray solid .02rem;
        .mini-comment-avatar{
            img{
                width:1.5rem;
                border-radius: 50% 50%;
            }
        }
        .mini-comment-text{
            padding:0 .2rem;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            text-align: left;
            .mini-comment-text-title{
                display: flex;      
                margin-bottom: .2rem;      
                .mini-comment-text-title-item1{
                    color:silver;
                    flex-grow: 1;
                }
                .mini-comment-text-title-item2{
                    color:green;
                }
            }
            .mini-comment-text-content{
                margin-bottom: .2rem;
            }
            .mini-comment-text-time{
                margin-bottom: .2rem;
                color:silver;
            }
        }
    }
</style>
