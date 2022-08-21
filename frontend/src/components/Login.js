import { useContext } from 'react';
import {React,useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {userContext} from "../App"
import './Styles.css';

const Login = () => {

  const {state,dispatch} = useContext(userContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const loginUser =async (e)=>{
    e.preventDefault();
    const res =await  fetch('/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email,
        password
      })
    });
    const data = await res.json();

    if(res.status === 400 || !data){
      window.alert('Invalid Credentials');
    }else{
      dispatch({type:"USER",payload:true});
      window.alert('Login Successful');
      navigate('/');
    }
 }
  return (
   <>
<div className='log-component'>
<h4>Login</h4>
    <form method='POST'>
        <input
            onChange={(e)=>setEmail(e.target.value)}
            className='log_field'
            placeholder="Enter your Mail"
            type="email"
            value={email}
            name="mail"
            required
        />
        <input
            onChange={(e) => setPassword(e.target.value)}
            className='log_field'
            placeholder="Enter your Password Number"
            type="password"
            value={password}
            name="password"
            required
        />
          <div>
            <button className='buttons btn btn-danger' value="login" onClick={loginUser}>Login</button>
            <button className='buttons btn btn-primary'>Clear</button>
          </div>
    </form>
    </div>
   </>
  )
}

export default Login