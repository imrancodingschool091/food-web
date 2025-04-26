import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Event.css';

function Event() {
  // Static data for events
  const events = [
    {
      id: 1,
      title: "Gourmet Food Festival",
      description: "Join us for a weekend of culinary delights from top chefs around the world.",
      location: "Central Park, New York",
      date: "2023-11-15",
      time: "11:00 AM - 8:00 PM",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      price: "$25"
    },
    {
      id: 2,
      title: "Wine Tasting Evening",
      description: "Experience premium wines paired with artisan cheeses in an elegant setting.",
      location: "Vineyard Estate, Napa Valley",
      date: "2023-11-22",
      time: "6:00 PM - 9:00 PM",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      price: "$45"
    },
    {
      id: 3,
      title: "Chef's Table Experience",
      description: "An exclusive 10-course meal prepared right before your eyes by our master chef.",
      location: "The Grand Hotel, Chicago",
      date: "2023-12-05",
      time: "7:00 PM - 10:00 PM",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      price: "$120"
    },
    {
      id: 4,
      title: "Cocktail Mixology Class",
      description: "Learn to craft signature cocktails from our award-winning mixologists.",
      location: "Spirit Lounge, Miami",
      date: "2023-12-12",
      time: "4:00 PM - 6:00 PM",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      price: "$35"
    }
  ];

  return (
    <div className="event-page">
      <div className="event-header">
        <h1>🎉 Upcoming Events</h1>
        <p className="subtitle">Discover unforgettable culinary experiences</p>
        <div className="header-decoration"></div>
      </div>
      
      <div className="event-grid">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <div className="event-image-container">
              <img 
                src={event.image} 
                alt={event.title}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/500x300?text=Event+Image';
                }}
              />
              <div className="event-price-tag">{event.price}</div>
            </div>
            <div className="event-details">
              <h3>{event.title}</h3>
              <p className="event-description">{event.description}</p>
              
              <div className="event-info">
                <p className="event-meta">
                  <FaCalendarAlt className="icon" /> {event.date}
                </p>
                <p className="event-meta">
                  <FaClock className="icon" /> {event.time}
                </p>
                <p className="event-meta">
                  <FaMapMarkerAlt className="icon" /> {event.location}
                </p>
              </div>
              
              <Link to="/Book" className="book-btn">
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Event;