import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import SideNav from '../components/SideNav';



const Story = () => {
    const [accessCode] = useState([])
    
    return (
        
        // <div className='loginPage d-flex justify-content-between'>
        <div className='dashboard'>
            <SideNav/>


        </div>
    )
}

export default Story