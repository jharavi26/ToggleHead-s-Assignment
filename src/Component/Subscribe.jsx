import React from "react";
import "../styles/Subscribe.css";
import Image from "../assets/image.png"


function Subscribe() {
  return (
    <div className="subscribe-container">
      <div className="subscribe-text">
        <h2>Subscribe</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna.
        </p>
        <div className="subscribe-input-container">
          <input
            type="email"
            placeholder="Enter your Email Address"
            className="subscribe-input"
          />
          <button className="subscribe-button">
            Subscribe Now <span>&#9654;</span>
          </button>
        </div>
      </div>
      <div className="subscribe-image">
        <img
          src={Image}
          alt="Subscribe Illustration"
          className="subscribe-illustration"
        />
      </div>
    </div>
  );
}

export default Subscribe;