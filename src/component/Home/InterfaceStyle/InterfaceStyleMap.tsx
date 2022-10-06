import React from 'react'
import InterfaceStyleData from './InterfaceStyleData'

const InterfaceStyleMap = () => {
  return (
    <>
   
    {InterfaceStyleData.map((val:any)=>{
      return (
        <>
<div className="col-md-6 text-center">
     
        <figure className='img-fluid ' data-aos-duration="2000" >{val.img}</figure>
  <h3 className="mt-4 text-capitalize main-heading ">{val.head}</h3>
  <p className="regular text-muted">{val.para}
  </p>

  </div>
 

  </>
      )
     

    })}
      
      </>
  )
}

export default InterfaceStyleMap
