import './App.css';
import React, { useState } from 'react';
import Navigation from './Components/Navigation';
import { Data } from './Data';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
function App() {
const [movies, setMovies] = useState(Data)
const addmovie=(newmovie)=>setMovies([...movies,newmovie])
const [search, setSearch] = useState("")
  return (
    <div>
    <Navigation search={search} setSearch={setSearch} />
    <AddMovie addmovie={addmovie} />
    <MovieList movies={movies} search={search}/>
    
    </div>
  );
}

export default App;
