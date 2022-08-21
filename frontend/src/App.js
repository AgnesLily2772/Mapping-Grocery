import React , {useState,createContext,useReducer} from 'react';
import {initialState,reducer} from './reducer/UseReduer';
import Navbar from './components/Navbar';
import Profile from './components/Profile'
import Index from './components/Payments/Index';
import Signup from './components/Signup';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Checkout from './components/Checkout';
import GooglePay from './components/Payments/GooglePay';
import PayPal from './components/Payments/PayPal';
import Delivery from './components/Delivery';
import Confirmed from './components/Confirmed';
import Logout from './components/Logout';
export const userContext = createContext();
const Routing = () =>{
  const [count,setCount] = useState(0);
  let [bag,setBag] = useState([]);
  let [obj,setObj] = useState({});
  return (
  <BrowserRouter>
  <Navbar data={{count,setCount}}/>
  <Routes>
    <Route exact path='/' element={<Home data={{count,setCount,bag,setBag,obj,setObj}}/>}/>
        <Route exact path="/signup" element={<Signup />}/> 
        <Route exact path="/login" element={<Login />}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/checkout' element={<Checkout data={{obj,setObj}}/>}/>
          <Route path='/payment/paypal' element={<PayPal/>}/>
          <Route path='/payment/gpay' element={<GooglePay/>}/>
        <Route path='/delivery' element={<Delivery/>}/>
        <Route path='/confirmed' element={<Confirmed/>}/>
        <Route path='/logout' element={<Logout/>}/>
  </Routes>
  </BrowserRouter>
  )
}

const  App = () =>{
const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <>
    <userContext.Provider value={{state,dispatch}}>
    <Routing />
    </userContext.Provider>
    </> 
  );
}

export default App;
