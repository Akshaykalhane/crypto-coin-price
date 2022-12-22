import React from 'react'

function Show({data}) {
  return (
    <div className='crypto-box1'> 
        {
            data.map((coin)=>{
                return (<div className='crypto-box' key={coin.id}>
                    {/* <div><p>coin name</p> <img src='/image/svg' /></div>
                    <p>price</p>
                    <p>2.5%</p>
                    <p>Market cap</p> */}
                    <div className='cry-img-box'> <img src={coin.image} alt='coin-img' /> <p>{coin.name}</p></div>
                    <p>Rs. {coin.current_price}</p>
                    {coin.price_change_percentage_24h < 0 ? <p className='red-class'>{coin.price_change_percentage_24h}%</p> : <p className='green-class'>{coin.price_change_percentage_24h}%</p>}
                    <div>
                        <p>Mkt cap:</p>
                        <p>{coin.market_cap}</p>
                    </div>
                </div>)
            })
        }
    </div>
  )
}

export default Show