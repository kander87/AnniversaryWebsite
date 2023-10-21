import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import TopNav from '../components/TopNav';
import {useNavigate} from 'react-router-dom'
import OneO8thToMagnolia from '../components/OneO8thToMagnolia.jpg';
import BathroomCoatrack from '../components/BathroomCoatrack.jpg';
import Diagram from '../components/Diagram.jpg';
import FloorPlan from '../components/FloorPlan.jpg';
import FrontEntrance from '../components/FrontEntrance.jpg';
import  MagnoliaToCook from '../components/MagnoliaToCook.jpg';            



const GettingThere = () => {
    // const [accessCode] = useState([]);

    const navigate= useNavigate()

    // useEffect(() => {// Check if token is present in local storage or cookies
    //     const token = localStorage.getItem('token'); // Use cookies to check
    //     console.log("token in the etting there page "+ token )
    //     if (!token) {
    //             console.log("notoken!")
    //         navigate('/')// Redirect the user back to the access code verification page
    //     }
    // }, []);
    
    return (
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

                        <p>The parking lot is off of Magnolia Road. There is a small red sign on Cook Lane showing the entrance of the parking lot from Magnolia:

                        <img src={MagnoliaToCook} alt="parking sign off Magnolia to Cook Lane" className="embeddedPics" />
                        </p>
                        <p></p>
                        <p>You will be able to enter the museum from the parking lot area where a security guard will be there to direct you to the event location within the museum. See the section "Once Inside" below for more info on where you enter and where the partay is.</p>

                </div>
                <div className="getting-there-section">
                    <h3 className="section-header-left">Drop-Off</h3>
                    <p>
                    If you are being dropped off, you will be able to enter through the main street location on East Blvd. See the section "Once Inside" below for more info on where you enter and where the partay is. There will not be anyone at this entrance to direct you where to go.
                    </p>
                    <img src={FrontEntrance} alt="front entrance of museum" className="embeddedPics" />
                </div>
                <div className="getting-there-section">
                    <h3 className="section-header-right">Once Inside</h3>
                    <p>
                    Here is a beautiful diagram I made to show you the basic layout when you come into the museum. Note: The Cocktail Hour will be down the stairs/elevator!
                    <img src={Diagram} alt="labeled diagram of inside museum" className="embeddedPics" />
                    </p>
                    <p></p>
                    <p></p>

                    <p>The first floor, across from where the elevator is, also has bathrooms and a coat rack. 
                    <img src={BathroomCoatrack} alt="bathroom and coat rack" className="embeddedPics" />
                    </p>
                    <p></p>
                    <p></p>


                        <p>And here is a basic floor plan! 

                        <img src={FloorPlan} alt="labeled floor plan of museum" className="embeddedPics" />
                        </p>
                </div>
            </div>
        </div>
    )
}

export default GettingThere