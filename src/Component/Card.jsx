import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import "../styles/Slider.css"

function Card() {
  return (
    <div className='slider-container'>
      <div className='slider'>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </div>

      <button>Know More <MdOutlineNavigateNext size={20}/> </button>
      
    </div>
  )
}

export default Card;
