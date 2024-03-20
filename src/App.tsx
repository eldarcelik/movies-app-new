import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PrivateRoute from '@/components/PrivateRoute';
import { MoviesShowsProvider } from '@/context';
import Login from '@/pages/Account/Login';
import Registration from '@/pages/Account/Registration';
import Error from '@/pages/Error/Error';
import Home from '@/pages/Home';
import MovieOrShow from '@/pages/MovieOrShow';
import Unauthorized from '@/pages/Unauthorized';

import './App.css';

function App(): JSX.Element {
  return (
    <MoviesShowsProvider>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path='/:content/:id'
            element={
              <PrivateRoute>
                <MovieOrShow />
              </PrivateRoute>
            }
          />
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/unauthorized' element={<Unauthorized />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </MoviesShowsProvider>
  );
}

export default App;
