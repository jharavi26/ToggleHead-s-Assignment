import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import "../styles/Slider.css"
import Card from './Card';

function Slider() {
  return (
    <div className='slider-container'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default Slider
