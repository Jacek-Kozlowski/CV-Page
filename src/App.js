import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ModalContextProvider from './Components/Context/ModalContext';
import UserInfoContextProvider from './Components/Context/UserInfoContext';
import Contact from './Components/Pages/Contact';
import HomePage from './Components/Pages/HomePage';
import Projects from './Components/Pages/Projects';

function App() {
  return (
    <UserInfoContextProvider>
    <ModalContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
    </BrowserRouter>
    </ModalContextProvider>
    </UserInfoContextProvider>
  );
}

export default App;
