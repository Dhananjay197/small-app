import React, { useEffect } from 'react'
import { useState } from 'react';

const Product = () => {

  const [pro, setPro] = useState();
  const API = "https://api.pujakaitem.com/api/products";
  const getProduct = async () =>{
       const url = await fetch(API);
       setPro(await url.json());
       
  }

  useEffect(()=>{
   getProduct();
  })
  return (
    <>
      <h1 className='text-center'>List Of All Product</h1> 
     <div className='container'>
     <div className='row'>
     

     {
      pro.map((curElem:any)=>{
        return(
          <div className='col-lg-4'> 
     <img src={curElem.image}/>
     <h1>{curElem.name}</h1>
     <h2>{curElem.company}</h2>
     <h3>{curElem.price}</h3>
<p>{curElem.description}</p>
     </div>
        )
      })
     }



    

     </div>

     </div>

      <></>
    </>
  )
}

export default Product