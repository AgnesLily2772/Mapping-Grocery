import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function PayPal  ({total}) {
    let navigate = useNavigate();
    const paypal = useRef();
    const TotalPayment = total + 0.00
    console.log(TotalPayment    )
useEffect(() => {
window.paypal.Buttons({
    createOrder:(data,actions,err) => {
        return actions.order.create({
            intent:"CAPTURE",
            purchase_units:[
                {
                    description:"Cool",     
                    amount:{
                        currency_code:"SGD",
                        value:TotalPayment
                    }
                }
            ]
        })
    },
    onApprove : async(data,actions) => {
        const order = await actions.order.capture()
        navigate('/delivery');
        console.log("your payment is successful");

    },
    onError:(err) =>{
        // console.log(err)
        navigate('/delivery');
    }
    
}).render(paypal.current);

},[])  
return (
    <div><div ref={paypal}></div></div>
  )
}
