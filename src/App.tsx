import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { MoviesShowsProvider } from './context';
import Login from './pages/Account/Login';
import Registration from './pages/Account/Registration';
import Error from './pages/Error';
import Home from './pages/Home';
import MovieOrShow from './pages/MovieOrShow';

function App() {
  return (
    <>
      <MoviesShowsProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:content/:id' element={<MovieOrShow />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route element={<Error />} />
          </Routes>
        </Router>
      </MoviesShowsProvider>
    </>
  );
}

export default App;
