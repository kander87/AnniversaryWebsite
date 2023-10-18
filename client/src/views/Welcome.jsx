import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import WelcomeImages from '../components/WelcomeImages';
import AccessCode from '../components/AccessCode';
import Footer from '../components/Footer';


const Welcome = () => {
    const [accessCode] = useState([])
    
    return (
        // <div className='loginPage d-flex justify-content-between'>
        <div className='welcome'>
            <WelcomeImages/>
            <AccessCode accessCode ={accessCode}/>
            <Footer/>

        </div>
    )
}

export default Welcome