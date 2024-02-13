import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { MoviesShowsProvider } from './context';
import Error from './pages/Error';
import Home from './pages/Home';
import MovieOrShow from './pages/MovieOrShow';
import Registration from './pages/Registration';

function App() {
  return (
    <>
      <MoviesShowsProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:content/:id' element={<MovieOrShow />} />
            <Route path='/registration' element={<Registration />} />
            <Route element={<Error />} />
          </Routes>
        </Router>
      </MoviesShowsProvider>
    </>
  );
}

export default App;
