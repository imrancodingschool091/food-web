import React from 'react'
import { FaUtensils, FaCalendarAlt, FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import "./Footer.css"
function Footer() {
  return (
    <div>
       <footer className="footer py-4 bg-dark text-white">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 mb-4 mb-md-0">
                    <h3 className="footer-heading">Our Restaurant</h3>
                    <p>
                      Bringing you the finest dining experience with exceptional food, 
                      warm service, and a welcoming atmosphere.
                    </p>
                    <div className="social-icons">
                      <a href="#" className="text-white me-3"><FaFacebook size={20} /></a>
                      <a href="#" className="text-white me-3"><FaInstagram size={20} /></a>
                      <a href="#" className="text-white"><FaTwitter size={20} /></a>
                    </div>
                  </div>
                  
                  <div className="col-md-4 mb-4 mb-md-0">
                    <h3 className="footer-heading">Contact Us</h3>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <FaMapMarkerAlt className="me-2" /> 123 Gourmet Street, Foodville
                      </li>
                      <li className="mb-2">
                        <FaPhone className="me-2" /> (123) 456-7890
                      </li>
                      <li>
                        <FaClock className="me-2" /> Open: Mon-Sun, 11AM - 10PM
                      </li>
                    </ul>
                  </div>
                  
                  <div className="col-md-4">
                    <h3 className="footer-heading">Newsletter</h3>
                    <p>Subscribe to receive updates and special offers.</p>
                    <div className="input-group mb-3">
                      <input type="email" className="form-control" placeholder="Your Email" />
                      <button className="btn btn-primary" type="button">Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
    </div>
  )
}

export default Footer
