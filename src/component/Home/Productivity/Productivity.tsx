import React from 'react'
import './Productivity.scss'
import feature from '../../../assets/images/feature-new.jpg';
import testimonial from '../../../assets/images/testimonial-thumb.jpg';
import Productivityprops from './ProductivityProps';
import  featureImg from 'src/assets/images/feature-new-02.jpg';




const Productivity = () => {

   
    return (
        <>
            <section className='my-5'>
                <div className="productivity">

                    <div className="container" >
                        <div className="row ">
                            <Productivityprops
                                img={feature}
                                aos="fade-right "
                                text='Increase your productivity with Small Apps'
                                heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

                                vision="InVision is a window into everything that's being designed at Twitter. It gets all of our best work in one place."
                                images={testimonial}
                                testimonial=" Jonathon Andrew , Themefisher.com"

                            />
                        </div>
                        <div className="row flex-row-reverse">
                            <Productivityprops
                                img={featureImg}
                                aos="fade-left"
                                text='Increase your productivity with Small Apps'
                                heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

                                vision="InVision is a window into everything that's being designed at Twitter. It gets all of our best work in one place."
                                images={testimonial}
                                testimonial=" Jonathon Andrew , Themefisher.com"

                            />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Productivity