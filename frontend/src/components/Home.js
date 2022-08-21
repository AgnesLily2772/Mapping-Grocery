import React, { useEffect, useState } from 'react'
import Content from './Content'

const Home = (props) => {
  const [search,setSearch] = useState([]);

  const filterData = e => {
    const value = e.target.value.toLowerCase();
    const filteredData = props.data.filter(
      item => (`${item.item}`.toLowerCase().includes(value))
    )
    props.data.setData(filteredData);
  }
  // useEffect(()=>{
  //   setSearch()
  // },[])
  return (
    <div>
          <Content data={props}/>
    </div>
  )
}

export default Home