import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import WelcomeImages from '../components/WelcomeImages';
import AccessCode from '../components/AccessCode';


const Welcome = () => {
    const [accessCode] = useState([])
    
    return (
        // <div className='loginPage d-flex justify-content-between'>
        <div className='welcome'>
            <WelcomeImages/>
            <AccessCode accessCode ={accessCode}/>

        </div>
    )
}

export default Welcome