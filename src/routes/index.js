import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../container/Home';
import Login from '../container/Login';
import { AuthProvider } from './authProvider';

export default function Router() {

  return (
    <AuthProvider>
    <BrowserRouter>
       <Routes>
         <Route path="/login" element={<Login />} />
         <Route path='*'  element={<Home />} />
       </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}
