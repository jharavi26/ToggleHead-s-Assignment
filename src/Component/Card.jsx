import React from 'react';
import "../styles/Slider.css"
import { MdNavigateNext } from "react-icons/md";

function Card() {
  return (
    <div className='card'>
      <div className = "card-item">
        <h3>Lorem ipsum</h3>
        <p style={{fontWeight : "10", color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
        <div className='know'></div>
        <p style={{ display: "flex", alignItems: "center", margin: 0 , gap:"10px" }}>Know More <MdNavigateNext size={20} style={{backgroundColor:"white" , color:"black" , borderRadius:"50px"}}/> </p>
        </div>
      </div>
  )
}

export default Card