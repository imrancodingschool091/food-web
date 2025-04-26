import React from 'react';
import { FaUtensils, FaCalendarAlt, FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Carousel */}
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
              className="hero-image" 
              alt="Restaurant interior" 
            />
            <div className="hero-overlay">
              <div className="hero-content animate__animated animate__fadeInUp">
                <h1 className="hero-title">
                  Eat <span className="text-accent">Healthy</span> And Naturally
                </h1>
                <p className="hero-subtitle">
                  Experience the finest flavors crafted with love and passion. 
                  Indulge in our carefully curated menu featuring the freshest ingredients.
                </p>
                <div className="hero-buttons">
                  <a href="./Menu" className="btn btn-primary">
                    <FaUtensils className="me-2" /> Our Menu
                  </a>
                  <a href="./Table" className="btn btn-outline-light">
                    <FaCalendarAlt className="me-2" /> Book Table
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
              className="hero-image" 
              alt="Delicious food" 
            />
            <div className="hero-overlay">
              <div className="hero-content animate__animated animate__fadeInUp">
                <h1 className="hero-title">
                  So <span className="text-accent">Tasty</span> and Delicious
                </h1>
                <p className="hero-subtitle">
                  Our chefs bring years of expertise to your plate, ensuring every bite 
                  is a perfect harmony of taste and texture.
                </p>
                <div className="hero-buttons">
                  <a href="./Menu" className="btn btn-primary">
                    <FaUtensils className="me-2" /> Our Menu
                  </a>
                  <a href="./Table" className="btn btn-outline-light">
                    <FaCalendarAlt className="me-2" /> Book Table
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">Why Choose Us</h2>
            <div className="divider mx-auto"></div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card text-center p-4 h-100">
                <div className="feature-icon mx-auto mb-3">
                  <img src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png" alt="Fresh Ingredients" />
                </div>
                <h3 className="feature-title">Fresh Ingredients</h3>
                <p className="feature-text">
                  We source only the freshest, highest quality ingredients for all our dishes.
                </p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-card text-center p-4 h-100">
                <div className="feature-icon mx-auto mb-3">
                  <img src="https://cdn-icons-png.flaticon.com/512/2459/2459773.png" alt="Expert Chefs" />
                </div>
                <h3 className="feature-title">Expert Chefs</h3>
                <p className="feature-text">
                  Our talented chefs bring years of experience and creativity to every plate.
                </p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-card text-center p-4 h-100">
                <div className="feature-icon mx-auto mb-3">
                  <img src="https://cdn-icons-png.flaticon.com/512/3179/3179068.png" alt="Cozy Ambiance" />
                </div>
                <h3 className="feature-title">Cozy Ambiance</h3>
                <p className="feature-text">
                  Enjoy your meal in our beautifully designed, comfortable dining space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-5 bg-dark text-white">
        <div className="container text-center">
          <h2 className="cta-title mb-4">Ready to Experience Our Cuisine?</h2>
          <p className="cta-text mb-4">
            Reserve your table now and enjoy an unforgettable dining experience.
          </p>
          <a href="./Table" className="btn btn-light btn-lg">
            <FaCalendarAlt className="me-2" /> Book Now
          </a>
        </div>
      </section>

      
    </div>
  );
}

export default Home;