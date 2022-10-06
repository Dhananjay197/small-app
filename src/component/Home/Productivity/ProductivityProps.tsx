import React from 'react';


const Productivityprops = (props :any) => {
  return (
   <>
        <div className="col-md-6 ">
                                            <img src={props.img} alt='Mobile' className='img-fluid' data-aos={props.aos} data-aos-duration="2000" />
                                        </div>
                                        <div className="col-md-6  py-5">
                                            <h2 className='head'>{props.text}</h2>
                                            <p className='para'>{props.heading}

                                            </p>
                                            <div className='testimonial'>
                                                <p className='vision'>{props.vision}</p>
                                                <ul className='list-inline meta d-flex'>
                                                    <li><img src={props.images} alt="" className='img-fluid list-inline-item test-img' /></li>
                                                    <li className="list-inline-item">{props.testimonial}</li>
                                                </ul>
                                            </div>
                                        </div>
    </>
  )
}

export default Productivityprops