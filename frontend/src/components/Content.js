import React, { useEffect, useState } from 'react'
import './Styles.css'

const Content = (props) => {
  let newObbj = {};
  let arrayBAG = props.data.data.bag;
    const [data,setData] = useState("");
    
    let [value,setValue] = useState(0)
    const handleAddCart = (index) =>{
      props.data.data.setCount((prev) => prev+1)
      const product = {
        name:data[index].item,
        price:data[index].price,
        quantity:0
      }
      console.log(product);
      setValue((prev) => 0)
      arrayBAG.push(product);
      for(let i=0;i<arrayBAG.length;i++)
      {
        const it = arrayBAG[i].name;
        const key = it+" "+arrayBAG[i].price;
        newObbj[key] =newObbj[key]+1 || 1;
      }
      console.log(arrayBAG);
      props.data.data.setObj(newObbj)
      console.log(newObbj)
      
     }
    const [text,setText] = useState('')


    const displayItems = async() => {
        try {
            const res =await fetch('/getItems',{
                method:"GET",
                headers:{
                  "Content-Type":"application/json"
                },
            });
            const Alldata = await res.json();
            setData(Alldata)
            if(!res.status===200){
              const error = new Error (res.error);
              throw error;
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        displayItems();
    },[]);
  return (
    <div className='container'>
    
    <input className='search' type='text' onChange={(e)=>setText(e.target.value)} placeholder='Type any name...'/>

    <div className= 'row content'>
      
        {data && data.filter(item=>item.item.toLowerCase().includes(text)).map((i,idx) => (
          <div className='col-md-4'>
        <div className="card singleCard"  key={idx}>
              <div className="card-body">
                <img src={`${i.url}`} className="card-img-top" style={{height:"150px"}} alt='...'/>
              <h5 className="card-title">{i.item}</h5>
                <p className="card-text">Type : {i.type}</p>
                <p className='card-text'>Rs. {i.price}</p>
                <button onClick={() => handleAddCart(idx)} className='btn btn-primary'>Add to Cart </button>
                </div>
            </div>
            </div>
        ))}
        </div>
        </div>
  )
}

export default Content