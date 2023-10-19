import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import TopNav from '../components/TopNav';
import {useNavigate} from 'react-router-dom'



const TheEvent = () => {
    const [accessCode] = useState([]);
    
    const navigate= useNavigate()
    
    useEffect(() => {// Check if token is present in local storage or cookies
      const token = localStorage.getItem('token'); // Use cookies to check
          if (!token) {
            console.log("notoken!")
          navigate('/')// Redirect 
      }
  }, []);

    return (
        <div>
            <TopNav/>
            <div className="events-container">
                <div className="event-header">
                  <h1 className="event-date">The Event</h1>
                  <h2>Saturday, December 30th</h2>
                </div>
                <div className="event-section">
                  <h3 className="section-header-right">Location</h3>
                  <h6>Crawford Auto Aviation Museum</h6>
                  <p>10825 East Blvd, Cleveland, OH 44106</p>     
                </div>
                <div className="event-section scedule-list">
                  <h3 className="section-header-left">Schedule</h3>
                  <ul>
                      <li>5:00 PM - Cocktail Hour/Museum Mingle</li>
                      <li>6:00 PM - Move to Main Floor</li>
                      <li>7:00 PM - Dinner</li>
                      <li>11:00 PM - Event Ends</li>
                  </ul>
                </div>
                <div className="event-section">
                  <h3 className="section-header-right">Dress Code</h3>
                  <p>The dress code for the event is semi-formal/formal. Please dress accordingly for the occasion.
                  </p>
                </div>
                <div className="event-section">
                  <h3 className="section-header-left">Food Arrangements</h3>
                  <p>
                    Food will be served buffet-style during the event. Enjoy a variety of delicious dishes. Please let us know in advance if you or someone in your party would like a vegan meal or a kids meal.
                  </p>
                </div>
                <div className="event-section">
                  <h3 className="section-header-right">Cocktail Hour/Museum Tour</h3>
                  <p>
                    During the cocktail hour, there will be time for everyone to go around and take pictures with all the cars/motorcycles in the museum.
                  </p>
                </div>
                <div className="event-section">
                  <h3 className="section-header-left">Separate Play Room for Kids</h3>
                  <p>
                    All kids are welcome to be in the main event at all times. However, there is a separate playroom available for kids.
                  </p>
                </div>
            </div>
        </div>
    )
}

export default TheEvent