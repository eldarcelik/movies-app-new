import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AppContextInterface } from 'types/types';

import './App.css';
import { MoviesShowsProvider } from './context/Context';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import MovieOrShow from './pages/MovieOrShow/MovieOrShow';

function App() {
  return (
    <>
      <MoviesShowsProvider value={{} as AppContextInterface}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:content/:id' element={<MovieOrShow />} />
            <Route element={<Error />} />
          </Routes>
        </Router>
      </MoviesShowsProvider>
    </>
  );
}

export default App;
