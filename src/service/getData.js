import axios from 'axios'

const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}


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
    return axios.get('/api/v1/topics',{
        params:{
            
        }
    });
}


//获取热映电影信息
var getHotMovies=locationId=>{
    //！！！！一定要加return返回promise哦
    return axios.get('/Showtime/LocationMovies.api',{
        params:{
            locationId:locationId
        }
    });
}

//获取正在售票的电影
var getIsSellingMovies=locationId=>{
    return axios.get('/PageSubArea/HotPlayMovies.api',{
        params:{
            locationId:locationId
        }
    });
}

//根据id获取电影详细信息
var getMovieDetailById=(locationId,movieId)=>{
    return axios.get('/movie/detail.api',{
        params:{
            locationId,
            movieId
        }
    });
}

//根据id获取电影评论信息
var getMovieCommentInfo=(movieId)=>{
    return axios.get('/movie/hotComment.api',{
        params:{
            movieId
        }
    });
}


var getHotMoviesP=(id)=>{
    setpromise(getHotMovies);
}

export {getSearchBook,getCnodeTopics,getBookById,getHotMovies,getHotMoviesP,getIsSellingMovies,getMovieDetailById,getMovieCommentInfo}