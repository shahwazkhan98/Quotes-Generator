import React, { useContext, useEffect } from 'react'
import QuoteContext from '../context/QuoteContext'
import { getQuote } from '../context/QuoteAction'
import Spinners from './Spinners'

const Card = () => {

   const {quote ,dispatch} =useContext(QuoteContext)
//    console.log(getQuote)

    const handleClick = async () => {
       const data = await getQuote();
       dispatch({
        type: "GET_DATA",
        payload: data,
      });    
    // console.log(data)
    }
    useEffect(()=>{
        handleClick()
    },[])
    if(!quote){
        return(
            <Spinners/>
        )
    }

  return (
    <div className="card">
  <div className="card-body">
    <p className="card-text h1 my-1 content">{quote.content}</p>
    <h5 className="card-title my-4"> <u> <i>{quote.author}</i> </u> </h5>
    <div className="my-5">
        <span className="badge text-bg-primary rounded-0 m-2">{quote.tags[0]}</span>
        <span className="badge text-bg-primary rounded-0">{quote.tags[1]}</span>
        </div>
    <button  className="btn btn-primary w-100 rounded-0" onClick={handleClick}>Get More Quotes</button>
  </div>
</div>
  )
}

export default Card
