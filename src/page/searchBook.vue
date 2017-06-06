<template>
    <div class="main">
        <div class="div1">
            <p>this is the {{title}} page</p>
            <p>please input your book id</p>
        </div>
        <div class="div2">
            <input type="text" v-model="input_book_id" />
            <button @click="searchBook(input_book_id)">get</button>
        </div>
        <div><p>{{book_title}}</p></div>
        <div class="summary">{{book_summary}}</div>
        
        
        <router-view></router-view>
        <foot-guide></foot-guide>
    </div>
    
</template>

<script>
    import {name,age} from './test-by'
    import footGuide from '../components/FootGuide'
    import {getSearchBook,getCnodeTopics,getBookById} from '../service/getData'
    

    export default{
        //示例图书id3332698
        data(){
            return{
                title:'search book',
                input_book_id:'',
                book_title:'',
                book_summary:''
            }
        },
        methods:{
            async searchBook() {
                    // 在这里使用起来就像同步代码那样直观
                    console.log('start');
                    try{
                        let data=await getBookById(this.input_book_id);
                        this.book_title=data.data.title;
                        this.book_summary=data.data.summary;
                        console.log(data);
                    }catch(err){
                        this.book_title='not found this book';
                        this.book_summary='';
                    }                                  
            }
               
            
            
        },
        mounted(){
            
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
    $h:3rem;

    .main{      
        margin:0 auto;
        font-size:1rem;
    }

    .div1{
        height:$h;
        text-align:center;
        p{
            font-size:.7rem;
            color:$myColor;
        }       
    }

    .div2{
        display: flex;
        justify-content: center;
        input{
        padding:0;
        border: 0;
        width:5rem;
        height:1rem;
        font-size:.5rem;
        }

        button{
            border:0;
            padding:0;
            font-size: .5rem;
            width:2rem;
            height:1rem;
        }
    }

    

    div.summary{
        width:100%;
        color:white;
        text-align: center;
        font-size:.6rem;
    }

</style>