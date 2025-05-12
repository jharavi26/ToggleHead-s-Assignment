import React from 'react';
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Us Section */}
        <div className="footer-column">
          <h3>Contact us</h3>
          <p>Address: amet, consetetur sadipscing elitr, sed diam</p>
          <p>Email id: eirmod tempor invidunt ut labore et dolore</p>
          <p>Phone no: 123456789</p>
        </div>

        {/* Follow Us Section */}
        <div className="footer-column">
          <h3>Follow us</h3>
          <div className="social-icons">
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png" alt="LinkedIn" /></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png" alt="Instagram" /></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/youtube-play.png" alt="YouTube" /></a>
          </div>
        </div>

        {/* Head Office Section */}
        <div className="footer-column">
          <h3>Head Office</h3>
          <p><img src="https://img.icons8.com/ios-filled/16/ffffff/marker.png" alt="Location" /> Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
          <p><img src="https://img.icons8.com/ios-filled/16/ffffff/clock.png" alt="Clock" /> Lorem ipsum dolor sit amet</p>
          <p><img src="https://img.icons8.com/ios-filled/16/ffffff/phone.png" alt="Phone" /> Phone: 123456789</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 All Rights Reserved. <a href="#">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;