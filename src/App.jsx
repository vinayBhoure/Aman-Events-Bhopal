import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from "./components/Header"

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Gallery = lazy(() => import('./pages/Gallery'));
const NotFound = lazy(() => import('./components/NotFound'));

function App() {


  return (
    <div className='relative'>
      {/* Suspense fallback for lazy-loaded components */}
      <Suspense fallback={<div>Loading...</div>}>

      {<Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer/>
    </div>
  );
}

export default App;