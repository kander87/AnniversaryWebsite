import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import TopNav from '../components/TopNav';
import {useNavigate} from 'react-router-dom'


const GettingThere = () => {
    const [accessCode] = useState([]);

    const navigate= useNavigate()

    useEffect(() => {// Check if token is present in local storage or cookies
        const token = localStorage.getItem('token'); // Use cookies to check
        
        if (!token) {
                console.log("notoken!")
            navigate('/')// Redirect the user back to the access code verification page
        }
    }, []);
    
    return (
        
        // <div className='loginPage d-flex justify-content-between'>
        <div className='dashboard'>
            <TopNav/>
            <div className="getting-there-container">
                <div className="getting-there-header">
                <h1 className="event-location">Getting There</h1>

                    <h2>Crawford Auto Aviation Museum</h2>
                    <p>10825 East Blvd, Cleveland, OH 44106</p>
                    <div className="google-maps-link">
                        <a
                        href={`https://www.google.com/maps/place/Crawford+Auto+Aviation+Museum/@41.5134397,-81.6135125,17z/data=!3m1!4b1!4m6!3m5!1s0x8830fb8cc7c708b5:0x7917c10d0e1a6113!8m2!3d41.5134397!4d-81.6109376!16zL20vMDdscDZ4?entry=ttu`}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        View on Google Maps
                        </a>
                    </div>
                </div>    
                <div className="getting-there-section">
                    <h3 className="section-header-right">Parking Information</h3>
                    <p>
                    Parking is available on-site and will be free to guests. 
                    </p>
                    <p>
                        <strong> Please note, however, that the location of the parking lot is in the back of the musuem and cannot be accessed from the same road as the main entrance. </strong>
                        </p>
                    
                    <p>Address for the parking lot:
                        <br>
                        </br> 10942 Cook Ln, Cleveland, OH 44106</p>

                        <p>The parking lot is off of Magnolia Road. There will be a small sign on Cook Lane showing the entrance of the parking lot</p>

                        <p>You will be able to enter the museum from the parking lot area where a secruity guard will be there to direct you to the event location within the museum. You will go through the room and down the hallway to your left where you will see the elevator on your left and stairs in front of you to take you down to the cocktail hour. However, if you are arriving after 6pm, the main event will be on your right, past the stairs, and in the rotunda area.</p>

                </div>
                <div className="getting-there-section">
                    <h3 className="section-header-left">Drop-Off</h3>
                    <p>
                    If you are being dropped off, you will be able to enter through the main street location on East Blvd. When you enter, there will be stairs to your left that will take you down to the cocktail hour. There is also an elevator straight ahead on the right side of the wall. However, if you are arriving after 6pm, the main event will simply be on your left, past the stairs, and in the rotunda area. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GettingThere