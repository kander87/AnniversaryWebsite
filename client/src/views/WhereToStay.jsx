import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import TopNav from '../components/TopNav';




const GettingThere = () => {
    const [accessCode] = useState([])
    
    return (
        
        // <div className='loginPage d-flex justify-content-between'>
        <div className='dashboard'>
            <TopNav/>
            <div className="getting-there-container">
                <div className="getting-there-header">
                    <h1 className="event-location">Where to Stay</h1>
                    <p>We are thrilled that you will be joiining us for Anna and Charles' 50th Anniversary. While you can obviously stay where you would like, here are a few options. Please note that many hotels in the downtown Cleveland charge for parking.</p>
                    
                </div>    
                <div className="getting-there-section">
                    <h3 className="section-header-right">Residence Inn (Clev. Univ. Circle)
</h3>
                    <p>Basic Room Price: ~$160 per night</p>
                    <p>Distance from Event: 0.8 miles</p>
                    <p>Where the guests of honor will be staying! The suites can have kitchens in them and there is an indoor pool which can be helpful for those of you traveling with children! </p>
                    <a href='https://www.marriott.com/en-us/hotels/cleuv-residence-inn-cleveland-university-circle-medical-center/overview/'
                    >
                        View Hotel Website
                        </a>                </div>
                <div className="getting-there-section">
                    <h3 className="section-header-left">The Glidden House</h3>
                    <p>Basic Room Price: ~$180-200 per night</p>
                    <p>Distance from Event: 0.3 miles</p>
                    <p>In a mansion dating from 1910, this elegant hotel is a 5-minute walk from the Crawford Museum and Cleveland Botanical Garden and a 7-minute walk from the Cleveland Museum of Art.</p>
                    <a href='https://www.gliddenhouse.com/?utm_source=gmb&utm_medium=organic&utm_campaign=gmb-local'
                    >
                        View Hotel Website
                        </a>   
                </div>
            </div>
        </div>
    )
}

export default GettingThere