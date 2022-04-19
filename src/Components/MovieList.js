import React from 'react'
import MovieCard from './MovieCard'


function MovieList({movies, search}) {
   
  return (
    <div style= {{display:"flex",justifyContent:"center",justifyItems:"center",gap:"15 px",flexWrap:'wrap'}}>
   {movies.filter((movie)=>movie.title.toLowerCase().includes(search.toLowerCase())).map((movie,i)=><MovieCard movie={movie} key={i}/>)} 
    </div>

  )
}

export default MovieList