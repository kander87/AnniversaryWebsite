import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from 'react-router-dom'
import Residence from '../components/Residence.jpg';
import Glidden from '../components/Glidden.jpg';


const GettingThere = (props) => {
    // const [accessCode] = useState([]);
    const navigate= useNavigate()

    // useEffect(() => {// Check if token is present in local storage or cookies
    //     const token = localStorage.getItem('token'); // Use cookies to check
    //     console.log("token in the where to stay page "+ token )

    //         if (!token) {
    //             console.log("notoken!")
    //         navigate('/')// Redirect the user back to the access code verification page
    //     }
    // }, []);
    
    return (
        <div className='container'>
            <div className="getting-there-container">
                <div className="getting-there-header">
                    <h1 className="event-location">Where to Stay</h1>
                    <p>We are thrilled that you will be joining us for Anna and Charles' 50th Anniversary. While you can obviously stay where you would like, here are a few options. Please note that many hotels in downtown Cleveland charge for parking.</p>
                    
                </div>    
                <div className="getting-there-section">
                    <h3 className="section-header-right">Residence Inn (Clev. Univ. Circle)</h3>
                    <p><span className="font-weight-bold" >Basic Room Price:</span> ~$160 per night</p>
                    <p><span className="font-weight-bold" >Distance from Event:</span>  0.8 miles</p>
                    <p><span className="font-weight-bold" >Address:</span>  1914 E 101st St, Cleveland, OH 44106 </p>

                    <p>Where the guests of honor will be staying! The suites can have kitchens in them and there is an indoor pool which can be helpful for those of you traveling with children (or if you are a child at heart)! </p>
                    <a href='https://www.marriott.com/en-us/hotels/cleuv-residence-inn-cleveland-university-circle-medical-center/overview/'
                    >View Hotel Website</a>               
                    <img src={Residence} alt="residence inn room picture with kitchen" className="embeddedPics" />
                </div>
                <div className="getting-there-section">
                    <h3 className="section-header-left">The Glidden House</h3>
                    <p><span className="font-weight-bold" >Basic Room Price:</span> ~$180-200 per night</p>
                    <p><span className="font-weight-bold" >Distance from Event:</span>  0.3 miles</p>
                    <p><span className="font-weight-bold" >Address:</span>  1901 Ford Dr, Cleveland, OH 441066 </p>
                    <p>In a mansion dating from 1910, this elegant hotel is a 5-minute walk from the Crawford Museum and Cleveland Botanical Garden and a 7-minute walk from the Cleveland Museum of Art.</p>
                    <a href='https://www.gliddenhouse.com/?utm_source=gmb&utm_medium=organic&utm_campaign=gmb-local'
                    >View Hotel Website</a>  
                    <img src={Glidden} alt="glidden hotel front entrance" className="embeddedPics" /> 
                </div>
                <div className="getting-there-section">
                    <h3 className="section-header-right">Hotels Under $100/Night</h3>
                    <p><span className="font-weight-bold" >Areas to look in:</span>  Independence (~25 min from venue), Shaker Heights (~30 min from venue), Wickliffe (~20 min from venue) </p>
                    <p>While the area nearby tends to be more expensive due to being in the city, there are plenty of great places to stay that are more budget friendly as loing as you are willing to have a little bit of a longer drive to the venue. There are a bunch of Extended Stay of America hotels that are very affordable, Comfort Inns, Ramadas, Red Roofs, etc. My family and I have oftne stayed in Independence and it is a great area! (I can't speak for the other areas though!). </p>
                </div>
            </div>

        </div>
    )
}

export default GettingThere