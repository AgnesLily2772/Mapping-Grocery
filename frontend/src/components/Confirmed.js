import React from 'react'
import giffy from './images/delivery.gif'
const Confirmed = () => {
  return (
    <div className='confirm'>
        <h1>
        Hurray, your order have been confirmed and your slot is booked.
        Green Green Grocery on the way
        </h1>
        <img src={giffy} className="imgg" alt="..."/>
    </div>
  )
}

export default Confirmed