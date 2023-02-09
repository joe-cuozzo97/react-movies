import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import LoginPage from '../LoginPage/LoginPage';
import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import ActorsListPage from '../ActorsListPage/ActorsListPage';
import NavBar from '../../components/NavBar/NavBar';
// import MovieCard from '../../components/MovieCard/MovieCard';
import { useParams } from 'react-router-dom';




export default function App() {
  const [user, setUser] = useState({});
  return (
    <main className="App">
      { user ?
      <>
      <NavBar />
       <Routes>
       <Route path="/" element={<MoviesListPage />} />
       <Route path="/movies/:movieName" element={<MovieDetailsPage/>} />
       <Route path="/actors" element={<ActorsListPage/>} />
     </Routes>
     </>
        :
        <MoviesListPage />
      }
    </main>
  );
  
}