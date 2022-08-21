import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Styles.css'
const Delivery = () => {
  let navigate = useNavigate();

    let slots = [
        {
            id:1,
            name:"Morning Slot",
            startTime:9,
            endTime:12
        },
        {
            id:2,
            name:"Afternoon Slot",
            startTime:12,
            endTime:15 
        },
        {
            id:3,
            name:"Evening slot",
            startTime:15,
            endTime:18
                
        },
        {
            id:4,name:"Night slot",
                startTime:18,
                endTime:21
        },
    ]
  return (
    <div className='container delivery' style={{marginTop:"70px",textAlign:"center"}}>
        <h1>Please select your preferrable delivery slot</h1>
        <div className='group'>
        {slots && slots.map((slot,index) => (
           <div className="card proCard" key={index}>
           <div className="card-header bg-dark ">
           </div>
           <div className="card-body">
             <h5 className="card-title">{slot.name}</h5>
             <p className="card-text">Time : {`${slot.startTime}-${slot.endTime}`}</p>
             {/* <a href="#!" rel='noreferrer' target="_blank" className="btn btn-primary">Book Slot </a> */}
             <button className='btn btn-success' onClick={() =>navigate('/confirmed')}>Book Slot</button>
           </div>
         </div>
        ))}
            
        </div>
    </div>
  )
}

export default Delivery