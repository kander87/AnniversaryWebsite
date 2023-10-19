import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import TopNav from '../components/TopNav';
import {useNavigate} from 'react-router-dom'
import Crawford from '../components/crawford.jpg';
import KidsRoom from '../components/kidsroom.jpg';
import Motorcycles from '../components/motorcycles.png';
import Everyone from '../components/Everyone.jpg';
import Dancing from '../components/Dancing.jpg';
import Posing1 from '../components/Posing1.jpg';
import WeddingBread from '../components/WeddingBread.jpg';
import Dresscode from '../components/Dresscode.jpg';


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
                  <img src={Crawford} alt="inside crawford auto museum" className="embeddedPics" />
                </div>
                <div className="event-section scedule-list">
                  <h3 className="section-header-left">Schedule</h3>
                  <ul>
                      <li>5:00 PM - Cocktail Hour/Museum Mingle</li>
                      <li>6:00 PM - Move to Main Floor</li>
                      <li>7:00 PM - Dinner</li>
                      <li>11:00 PM - Event Ends</li>
                      <img src={Dancing} alt="Ukrainian dancing at wedding" className="embeddedPics" />

                  </ul>
                </div>
                <div className="event-section">
                  <h3 className="section-header-right">Dress Code</h3>
                  <p>The dress code for the event is semi-formal/formal. Please dress accordingly for the occasion.
                  </p>
                  <img src={Dresscode} alt="Young family members dressed up sitting on couch" className="embeddedPics" />

                </div>
                <div className="event-section">
                  <h3 className="section-header-left">Food Arrangements</h3>
                  <p>
                    Food will be served buffet-style during the event. Enjoy a variety of delicious dishes. Please let us know in advance if you or someone in your party would like a vegan meal or a kids meal.
                  </p>
                  <img src={WeddingBread} alt="bride and groom in front of the wedding bread" className="embeddedPics" />

                </div>
                <div className="event-section">
                  <h3 className="section-header-right">Cocktail Hour/Museum Mingle</h3>
                  <p>
                    During the cocktail hour, there will be time for everyone to go around and take pictures with all the cars/motorcycles in the museum.
                  </p>
                  <img src={Motorcycles} alt="inside crawford auto museum- motorcycles" className="embeddedPics" />
                  <img src={Posing1} alt="Anna and Charles posing in the museum" className="embeddedPics" />

                </div>
                <div className="event-section">
                  <h3 className="section-header-left">Separate Playroom for Kids</h3>
                  <p>
                    All kids are welcome to be in the main event at all times. However, there is a separate playroom available for kids that is right next to the main event area. 
                  </p>
                    <img src={KidsRoom} alt="inside crawford auto museum- kids room boat and little cars" className="embeddedPics" />
                </div>
                <div className="event-section">
                  <h3 className="section-header-right">No Gifts Please!</h3>
                  <p>
                    Your presence is a gift enough! 
                  </p>
                  <img src={Everyone} alt="family photo at wedding" className="embeddedPics" />
                </div>
            </div>
        </div>
    )
}

export default TheEvent