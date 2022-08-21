




import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import GooglePay from './Payments/GooglePay';
import PayPal from './Payments/PayPal';

const Checkout = (props) => {
    let navigate = useNavigate();
    const[checkOut,setCheckOut] = useState(false);

    let finalCart = props.data.obj;
    let id = 1001;
    var arr = []
  var final = 0
  var total = 0
    
  return (
    <div style={{marginTop:"30px"}}>
        BILL    
        <table className='table'>
        <thead>
    <tr>
      <th scope="col">Item No.</th>
      <th scope="col">Item Name</th>
      <th scope="col">Item Price</th>
      <th scope="col">Item Quantity</th>
      <th>Total</th>
    </tr>
  </thead>
        <tbody>
        {
                Object.entries(finalCart).map(([key, val]) => 
                
                {
                  let key1 = key.split(' ')
                  let key11 = key1[1]
                   final = key11*val
                  arr.push(final)
                console.log(arr)
                total = arr.reduce((a,b)=>a+b)
                console.log(total)

                    return (
                        <tr key={key}>
                            <td>{id}</td>
                            <td>{key}</td>
                            <td>{key.match(/\d+/g)}</td>
                            <td>{val}</td>
                            <td>{
                              final
                            }</td>
                        </tr>
                    )
                }
                )
        }
        </tbody>
        </table>
        <p>total:{total}</p>

        {/* <PayPal/> */}
        Checkout with
        {checkOut ? (<PayPal   total={total}/>) : (
            <button className='btn btn-primary' onClick={() => setCheckOut(true)}>PayPal</button>
        )}
        {checkOut ? (<GooglePay total={total}/>   ) : (
            <button className='btn btn-warning' onClick={() => setCheckOut(true)}>GooglePay</button>
        )}
    </div>

  )
}

export default Checkout