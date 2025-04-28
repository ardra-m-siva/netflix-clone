import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../constants/axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import YouTube from 'react-youtube'
const RowPost = ({url,title,isSmall}) => {
  const [urlId,setUrlId]=useState('')
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(url).then(res=>{
      console.log(res.data.results);
      setMovies(res.data.results)
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(res=>{
      console.log(res);
      if(res.data.results.length!==0){
        setUrlId(res.data.results[0])
      }else{
        console.log("response array is empty");
        
      }
    })
  }
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="posters">
        {
          movies.map(item=>
            <img onClick={()=>handleMovie(item.id)} className={isSmall?'smallPoster':'poster'} src={`${imageUrl+item?.backdrop_path}`} alt="poster" />
          )
        }
      </div>
     {
      urlId&&  <YouTube videoId={urlId.key} opts={opts}/>
     }
    </div>
  )
}

export default RowPost