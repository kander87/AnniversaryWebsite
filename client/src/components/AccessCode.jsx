import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const AccessCode = (props) => {

    const [accessCode, setAccessCode] = useState("");
    const [error,setError]= useState([])

    const navigate= useNavigate()

    const accessCodeCheck = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/verifyAccessCode', {
                accessCode
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
    
            if (response.data.msg === 'Access code verified successfully.') {
                const token = response.data.token; // get the token from the response
                localStorage.setItem('accessCode', JSON.stringify(accessCode));
                localStorage.setItem('token', token); // Store the token in localStorage
                console.log("token:" + token)
                navigate(`/TheEvent`);
                console.log('Access code is correct');
            } else {
                setError('Invalid access code');
            }
        } catch (error) {
            setError('Invalid access code');
            console.error(error);
        }
    };
    
    const onSubmitHandler = (e) => {
        navigate('/TheEvent')

    };



    return (
        <div className="accessCode">

            <form className="m-2" onSubmit={onSubmitHandler}>
                    <div>
                    <button className=' gold-gradient enter'>ENTER</button>
                    </div>
        </form>
        </div>
    )
}

export default AccessCode

