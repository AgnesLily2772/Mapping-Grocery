import {React,useState} from 'react';
import './Styles.css';
import {Link, useNavigate} from 'react-router-dom';
const Signup = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({name:"",email:"",password:""})
  let name,value;
  const handleInputs = (e) =>{
      console.log(e);
      name = e.target.name;
      value=e.target.value;
      setUser({...user,[name]:value});
}

const PostData = async (e) =>{
  e.preventDefault();

  const {name,email,password} = user;

  const res = await fetch("/signup",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name,email,password
    })
  });
  const data = await res.json();
    if(res.status=== 422  || !data){
          window.alert("Failed");
          console.log("Failed");
    }else{
      window.alert("success");
      console.log("success");
      navigate("/login")
    }
}
  return (
    <>
        <div className='form-component'>
        <h4>SignUp</h4>
        <form method="POST" > 
            <input
                className='form_field'
                placeholder="Enter your Name"
                type="text"
                value={user.name}
                onChange={handleInputs}
                name="name"
            />
            <input
               onChange={handleInputs}
                className='form_field'
                placeholder="Enter your Mail"
                type="text"
                value={user.email}
                name="email"
            />
            <input
                onChange={handleInputs}
                className='form_field'
                placeholder="Enter your Password"
                type="text"
                value={user.password}
                name="password"
            />

          <div>
          <button className='buttons btn btn-danger' value="signup" onClick={PostData}>Signup</button>
          <button className='buttons btn btn-primary'>Clear</button>
          </div>
    
        </form>
    </div>

    
    </>
  )
}

export default Signup