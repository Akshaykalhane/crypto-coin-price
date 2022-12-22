import React, { useEffect, useState } from 'react'
import Show from './show';
import './crypto.css';

function App21() {
  const [data,setData]=useState([]);
  const [search,setSearch]=useState('')

  const getData = async () => {
    let url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    let res = await fetch(url,{
      method:'GET'
    });
    let data=await res.json();
    console.log(data)
    setData(data);
  }

  useEffect(()=>{
    getData();
  },[])

const handleChange=(e)=>{
  setSearch(e.target.value)
}

const filterData=data.filter((coin)=>coin.name.toLowerCase().includes(search));
console.log(filterData)
  return (
    <div className='crypto-container'>
        <div className='search-ele'>
          <input type='text' id='search1' placeholder='' required onChange={handleChange}/>
          <label htmlFor='search1'>Search Coin</label>
        </div>
        <Show data={filterData} />
    </div>
  )
}

export default App21