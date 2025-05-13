import React from 'react';
import "../styles/Countdown.css";

function Countdown() {
  return (
    <div className="grid-container">
      <div className='item'>
        <p >Lorem ipsum</p>
        <span style={{fontWeight:"bolder", fontSize:"40px"}}>123+</span>
        <h3>Lorem ipsum</h3>
        <p>m ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c.</p>
      </div>
      <div className='item'>
        <p>Lorem ipsum</p>
        <span style={{fontWeight:"bolder", fontSize:"40px"}}> 12+</span>
        <h3>Lorem ipsum</h3>
        <p>m ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .</p>
      </div>
      <div className='item'>
        <p>Lorem ipsum</p>
        <span style={{fontWeight:"bolder", fontSize:"40px"}}>12+</span>
        <h3>Lorem ipsum</h3>
        <p>m ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
      </div>
      <div className='item'>
        <p>Lorem ipsum</p>
        <span style={{fontWeight:"bolder", fontSize:"40px"}}>123</span>
        <h3>Lorem ipsum</h3>
        <p>m ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat </p>
      </div>
    </div>
  )
}

export default Countdown
