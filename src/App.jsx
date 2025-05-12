import React from 'react';
import "./App.css"
import Header from "./Component/Header";
import Hero from './Component/Hero';
import Examination from './Component/Examination';
import Slider from './Component/Slider';
import Countdown from './Component/Countdown';
import Faq from './Component/Faq';
import Footer from './Component/Footer';
import Subscribe from './Component/Subscribe';



function App() {
  return (
    <div className='container'>
      <Header/>
      <Hero/>
      <Examination/>
      <Slider/>
      <Countdown/>
      <Faq/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App
