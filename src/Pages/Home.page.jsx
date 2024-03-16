import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import Header from '../Components/Header/Header.Component';
import { Table } from '../Components/Tables/Table.component';
import { Card } from '../Components/Cards/Card.component';

// import Product from "./Prodect.page"
export function Home(props)
{
  const matchDetailes=[
    {
      matchName:"KCC Vs Market", 
      matchTiming:"17/03/2023 Morning 7:00 am", 
      matchVenue:"Venue: PKN college"
    },
    {
      matchName:"KCC Vs Pandiyanagar", 
      matchTiming:"17/03/2023 Morning 4:00 pm", 
      matchVenue:"Venue: PKN college"
    },
    {
      matchName:"KCC Vs Pandiyanagar", 
      matchTiming:"16/03/2023 Morning 4:00 pm", 
      matchVenue:"Venue: PKN college"
    },
    {
      matchName:"KCC Vs Pandiyanagar", 
      matchTiming:"17/03/2023 Morning 4:00 pm", 
      matchVenue:"Venue: PKN college"
    }

  ]
  const [count, setCount] = useState(0);

    const navigate=useNavigate()


    useEffect(() => {

      setCount(count)

    },[])



    return(
        <>
        {/* <button onClick={()=>navigate("/CreateBrand")}>Add Brand</button>
      <h1>This is Home Page, Welcome {props.uName}</h1>
     */}
<Header /><br></br>
{matchDetailes.map((item) => (

<Card matchDetailes={item} />
   ) )}
        </>
    )
}