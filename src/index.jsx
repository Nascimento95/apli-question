import React from 'react';
import {createRoot} from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Survey from './pages/Survey/Survey';
import Header from './components/Header/header';
import Notfound from './pages/Notfound/NotFound';
import Results from './pages/Results/Results';
import Freelances from './pages/Freelances/Freelances';
import { GlobalStyle } from './utils/style/Global-style.jsx';
import { ThemeProvider } from './utils/context/Context.jsx';


const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle/>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/survey/:questionId" element={<Survey />}/>
            <Route path="/results" element={<Results />}/>
            <Route path="/freelances" element={<Freelances />}/>
            <Route path='*' element={<Notfound/>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

