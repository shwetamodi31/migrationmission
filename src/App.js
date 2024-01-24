import React from 'react'
import {BrowserRouter, Routes,Route } from 'react-router-dom'
//import NewsNavbars from '../NewsApp/components/NewsNavbars';
import Navbar from './combination--of-internship/Navbar';
import WeatherApp from './combination--of-internship/WeatherAPP/WeatherApp';
import NewsApp from './combination--of-internship/NewsAPP/NewsApp';
import DrApp from './combination--of-internship/Dr-FullCalander/DrApp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from './combination--of-internship/Footer';
import EmpApp from './combination--of-internship/Employee-management-app/EmpApp';
import LocalNews from './combination--of-internship/NewsAPP/components/LocalNews';
import Home from './combination--of-internship/NewsAPP/components/Home';




const App = () => {
  return (
    <>
    
    <Navbar/>
    <Routes>
    <Route path='/WeatherAPP' element={<WeatherApp/>}/>     
    <Route path='/NewsAPP' element={<NewsApp/>}/> 
    <Route path='/Employee-management-app' element={<EmpApp/>}/> 
    <Route path='/Dr-FullCalander'melement={<DrApp/>}/> 
    <Route path='/LocalNews' element={<LocalNews/>}/> 
    <Route path='/Home' element={<Home/>}/> 
    </Routes>
    <Footer/>
    </>
  );
};

export default App