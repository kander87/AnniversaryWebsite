import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import TopNav from '../components/TopNav';
import {useNavigate} from 'react-router-dom'
import Residence from '../components/Residence.jpg';
import Glidden from '../components/Glidden.jpg';


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
        <div className='dashboard'>
            <TopNav/>
            <div className="getting-there-container">
                <div className="getting-there-header">
                    <h1 className="event-location">Where to Stay</h1>
                    <p>We are thrilled that you will be joining us for Anna and Charles' 50th Anniversary. While you can obviously stay where you would like, here are a few options. Please note that many hotels in downtown Cleveland charge for parking.</p>
                    
                </div>    
                <div className="getting-there-section">
                    <h3 className="section-header-right">Residence Inn (Clev. Univ. Circle)</h3>
                    <p>Basic Room Price: ~$160 per night</p>
                    <p>Distance from Event: 0.8 miles</p>
                    <p>Where the guests of honor will be staying! The suites can have kitchens in them and there is an indoor pool which can be helpful for those of you traveling with children (or if you are a child at heart)! </p>
                    <a href='https://www.marriott.com/en-us/hotels/cleuv-residence-inn-cleveland-university-circle-medical-center/overview/'
                    >View Hotel Website</a>               
                    <img src={Residence} alt="residence inn room picture with kitchen" className="embeddedPics" />
                </div>
                <div className="getting-there-section">
                    <h3 className="section-header-left">The Glidden House</h3>
                    <p>Basic Room Price: ~$180-200 per night</p>
                    <p>Distance from Event: 0.3 miles</p>
                    <p>In a mansion dating from 1910, this elegant hotel is a 5-minute walk from the Crawford Museum and Cleveland Botanical Garden and a 7-minute walk from the Cleveland Museum of Art.</p>
                    <a href='https://www.gliddenhouse.com/?utm_source=gmb&utm_medium=organic&utm_campaign=gmb-local'
                    >View Hotel Website</a>  
                    <img src={Glidden} alt="glidden hotel front entrance" className="embeddedPics" /> 
                </div>
            </div>
        </div>
    )
}

export default GettingThere