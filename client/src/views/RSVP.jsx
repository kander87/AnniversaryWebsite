import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import TopNav from '../components/TopNav';

import axios from 'axios'



const RSVP = (props) => {
    const [accessCode] = useState([])
    const [name, setName] = useState("");
    const [rsvp, setRSVP] = useState("");
    const [rsvpCount, setRSVPCount] = useState("");
    const [notes, setNotes] = useState("");
    const [errors,setErrors]= useState([])

    const navigate= useNavigate()

    useEffect(() => {// Check if token is present in local storage or cookies
        const token = localStorage.getItem('token'); // Use cookies to check
            if (!token) {
                console.log("notoken!")
            navigate('/')// Redirect 
        }
    }, []);

     //handler when the form is submitte
    const onSubmitHandler = e => {
        e.preventDefault();
        console.log("strawberry")
        axios.post('http://localhost:8000/api/rsvp', {name, rsvp, rsvpCount, notes}) 
            .then(res=>{
                console.log("kiwi")
                console.log(res)
                navigate('/TheEvent')
                alert('Thank you for your RSVP!')
            })
            .catch(err => {
                console.log("bananananana")
                console.log(err.response)
                setErrors(err.response?.data?.errors)})
            setName("");
            setRSVP("");
            setRSVPCount("");
            setNotes("");  
    }
    
    return (
        <div className='dashboard'>
        <TopNav/>
        <form className="RSVP p-2 " onSubmit={onSubmitHandler}>
        <h1 className="event-location">RSVP</h1>
            <div className="alert alert-info mt-3 mb-0 col-10 text-center mx-auto">
                Note: If you already RSVPed to Kate you do not need to fill this out unless you want to!
            </div>
            <div className="container">
                <div className="row p-2">
                    <div className='formDiv form-group d-flex align-items-center'>
                        <label className='formLabel col-3'>Name(s): </label>
                        <input 
                            placeholder='' 
                            className='formInput col-9' 
                            type="text" 
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                            />
                    </div>
                            {
                                errors?.name && (
                                    <span className="text-danger">{errors.name?.message}</span>
                                )
                            }
                </div>

            </div>
            <div className="container">
                <div className="row p-2">
                    <div className='formDiv form-group d-flex align-items-center'>
                        <label className=' formLabel col-3'>Attending? </label>
                        <select 
                            className='formInput col-9' 
                            value={rsvp}
                            required
                            onChange={(e) => setRSVP(e.target.value)}
                        >
                            <option>Select Option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                        {
                                errors?.rsvp && (
                                    <span className="text-danger">{errors.rsvp?.message}</span>
                                )
                            }
                </div>
            </div>
            <div className="container">
                <div className="row p-2">
                    <div className='formDiv form-group d-flex align-items-center'>
                        <label className=' formLabel col-3'># of Guests (Total):  </label>
                        <select 
                            className='formInput col-9' 
                            value={rsvpCount}
                            required
                            onChange={(e) => setRSVPCount(e.target.value)}
                        >
                            <option>Please select the total number including yourself</option>
                            <option value="0">0- Will not be attending</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                        {
                                errors?.rsvpCount && (
                                    <span className="text-danger">{errors.rsvpCount?.message}</span>
                                )
                            }
                </div>
            </div>
            
            <div className="container">
                <div className="row p-2">
                    <div className='formDiv form-group d-flex align-items-center'>
                        <label className=' formLabel col-2'>Notes: </label>
                        <textarea 
                    placeholder='Please type any additional information here such as: would any of your guests like a vegan meal? How many of your guests are children and do you want kids dinners for them? Or anything else you want us to know!' 
                    className='formInput col-10 notesInput' 
                            type="text" 
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <button className='btn submitButton mt-2'>Submit</button>
        </form>
    </div>
    )
}

export default RSVP