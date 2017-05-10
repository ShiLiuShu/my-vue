import axios from 'axios'


//根据关键词搜索图书
var getSearchBook=(q,tag,start,count)=>{
    return axios.get('/v2/book/search',{
        params:{
            q,
            tag,
            start,
            count
        }
    });
};

//根据id搜索图书
var getBookById=_id=>{
    return axios.get('/v2/book/'+_id,{
        params:{
            
        }
    });
}

var getCnodeTopics=()=>{
    axios.get('/api/v1/topics',{
        params:{
            
        }
    });
}

export {getSearchBook,getCnodeTopics,getBookById}