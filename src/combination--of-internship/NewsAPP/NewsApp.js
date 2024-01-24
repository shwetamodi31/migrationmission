import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from'../NewsAPP/components/Home';
import LocalNews from '../NewsAPP/components/LocalNews';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Entertainments from '../NewsAPP/components/Entertaiment'
import Politics from '../NewsAPP/components/Politics';
import Sports from '../NewsAPP/components/Sports';
import NewsNavbars from '../NewsAPP/components/NewsNavbars';
const NewsApp = () => {
  return (
    <>
    
    <Routes>
    <Route path='/'element={<Home/>}/>     
    <Route path='/Sports'element={<Sports/>}/> 
    <Route path='/Entertainments'element={<Entertainments/>}/> 
    <Route path='/Politics'element={<Politics/>}/> 
    <Route path='/LocalNews'element={<LocalNews/>}/> 
    </Routes>
    
    </>
  );
};

export default NewsApp;