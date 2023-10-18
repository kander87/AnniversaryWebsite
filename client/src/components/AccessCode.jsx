import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const AccessCode = (props) => {

    const [accessCode, setAccessCode] = useState("");
    const [error,setError]= useState([])

    const navigate= useNavigate()

    const accessCodeCheck = () => {
            axios.post('http://localhost:8000/api/verifyAccessCode', {
                accessCode
            })
            .then(res => {
                console.log("first response area")
                console.log(res.data.msg)
                if (res.data.msg === 'Access code verified successfully.') {
                    localStorage.setItem('accessCode', JSON.stringify(accessCode));
                    navigate(`/TheEvent`);
                    console.log('Access code is correct');
                } 
            })

            .catch((err) => {
                setError('Invalid access code');
                console.error(err);
            });
        }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        accessCodeCheck();
        console.log({ accessCode});
        setAccessCode("");
    };



    return (
        <div className="accessCode">
            <p className="mt-2">Please submit the access code to enter:</p>
            <form className="m-2" onSubmit={handleSubmit}>

                <input 
                    placeholder='Access Code' 
                    className='centerInput' 
                    type="text" 
                    value={accessCode}
                    required
                    onChange={(e) => setAccessCode(e.target.value)}
                />
                    {error && <div className="text-danger">{error}</div>}
                    <div>
                        <button className='btn gold-gradient enter'>Enter</button>
                    </div>
        </form>
        </div>
    )
}

export default AccessCode

