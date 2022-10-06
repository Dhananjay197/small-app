import React from 'react';
import './InterfaceStyle.scss';
import iphone from 'src/assets/images/iphone-ipad.jpg';
import InterfaceStyleMap from './InterfaceStyleMap';

const InterfaceStyle = () => {
  return (
    <>
      <section className='InterfaceStyle bg-gray '>
        <div className="container-fluid">
          <div className="row">
            <div className="text-center">
              <h3 className='head'>An Interface For Lifestyle</h3>
              <p className='para'>Small Apps makes it easy to stay on top of your Life Style. No late tasks. No gimmicks.</p>
            </div>
          </div>


          <div className=" iphone my-5">
            <div className="row">
              <div className="col-md-6 ">
                <img src={iphone} alt='Iphone' className='img-fluid iphone-app' data-aos="fade-right" />
              </div>
              <div className="col-md-6 prototype bg-light shadow ">
                <div className="row">
                  <InterfaceStyleMap />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default InterfaceStyle