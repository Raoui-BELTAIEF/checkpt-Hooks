import React from 'react'
import MovieCard from './MovieCard'


function MovieList({movies}) {
   
  return (
    <div style= {{display:"flex",justifyContent:"center",justifyItems:"center",gap:"15 px",flexWrap:'wrap'}}>
   {(movies.map((movie,i)=><MovieCard movie={movie} key={i}/>))}
    </div>

  )
}

export default MovieList