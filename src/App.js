import './App.css';
import React, { useState } from 'react';
import Navigation from './Components/Navigation';
import { Data } from './Data';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
function App() {
const [movies, setMovies] = useState(Data)
const addmovie=(newmovie)=>setMovies([...movies,newmovie])
  return (
    <div>
    <Navigation/>
    <AddMovie addmovie={addmovie} />
    <MovieList movies={movies}/>
    
    </div>
  );
}

export default App;
