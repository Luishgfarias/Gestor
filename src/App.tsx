import React from 'react';
import './App.scss';
import Login from './pages/Login';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; 
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Protect from './pages/Protect';
import Home from './pages/Home';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={
            <Protect>
              <Home />
            </Protect>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
