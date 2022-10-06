import React from 'react'
import './Banner.scss';
import mobile from  "../../../assets/images/mobile.png";

const Banner = () => {
  return (
    <section className='showcase-section '>
        <div className='showcase-header '>
        <div className="container py-5">
            <div className="row ">
                <div className="col-md-6  detail  text-md-left mt-5">
                <h1 className="text-white font-weight-bold mb-4">Showcase your app with Small Apps</h1>
                <p className="text-white mb-5">Besides its beautiful design. Laapp is an incredibly rich core framework for you to
					showcase your App.</p>
                    <a href="#" className="btn btn-main my-5">Download Now</a>
                </div>
                <div className="col-md-6 mt-5">
                    <img src={mobile} alt="" className='img-fluid' />
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Banner