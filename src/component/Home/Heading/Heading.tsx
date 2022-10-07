import React from 'react'
import './Heading.scss';
import HeadingData from './HeadingData';



const Heading = () => {

  return (
    <section>
      <div className="heading">
        <div className="container margin">
          <div className="row radius shadow bg-white">


            {HeadingData.map((val: any) => {
              return (
                <>
                  <div className="col-md-4  mt-5 p-2 mt-md-0 text-center">
                    <figure className='icon'>{val.img}</figure>
                    <h3 className="mt-4 text-capitalize main-heading ">{val.heading}</h3>
                    <p className="regular text-muted">{val.text}
                    </p>
                  </div>
                </>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Heading