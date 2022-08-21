import {React,useState,useEffect} from 'react'
import './Styles.css';
const Profile = () => {
  const [userData,setUserData] = useState({});
  const callAboutPage = async () =>{
    try{
      const res =await fetch('/profile',{
          method:"GET",
          headers:{
            Accept:"appllication/json",
            "Content-Type":"application/json"
          },
          credentials:"include"
      });
      const data = await res.json();
      setUserData(data);
      if(!res.status===200){
        const error = new Error (res.error);
        throw error;
      }
    }catch(err){
      console.log(err);
    }
  }
useEffect(() => {
  callAboutPage();
}, [])
  return (
   <>
   <div className="profile-component">
     <form method="GET">
        <div className='data-field'>
            <h5>Name : {userData.name}</h5>
            <h5>Email : {userData.email}</h5>
        </div>
     </form>
   </div>
   
   </>
  )
}

export default Profile;