import React from 'react'
import { useEffect ,useState,useContext} from 'react'
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import {userContext} from "../App"

const Logout = () => {
    const navigate = useNavigate();
    const {state,dispatch} = useContext(userContext);
    useEffect(()=>{
        fetch('/logout',{
            method:'GET',
            headers:{
                Accept:'appllication/json',
                'Content-Type':'application/json'
            },
            credentials:'include'
        }).then((res)=>{
            dispatch({type:"USER",payload:false});
            navigate('/login');

            // history.push('/login',{replace:true});
            if(res.status !== 200){
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err)=>{
            console.log(err);
        });
    });
  return (
    <>
    <h1>Logout</h1>
    </>
  )
}

export default Logout;