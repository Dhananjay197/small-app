import React from 'react'
import './Programm.scss';
import ranchi from "../../../assets/images/Group45694.png";
import chandimandir from "../../../assets/images/Group45695.png";
import armyschool from "../../../assets/images/Group45694.png";
import mathura from "../../../assets/images/Group45697.png";
import kanpur from "../../../assets/images/Group45698.png";
import pc from "../../../assets/images/Group56.png";

const Programm = () => {
    return (
        <section className='programm'>
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <h4 className='text-center head'>Annual Major Works Programme (AMWP)</h4>
                        <p className='text-center para'>We have come a long way in our journey which began in 2003 from vintage barracks to State of Art infrastructure. With the persistent efforts of Adjutant General and Quarter Master General, 74 Schools have been sanctioned in AMWP. Schools constructed through AMWP get modern infrastructure. Out of this 57 schools have been completed and balance are in various stages of progress. List of these schools are given below:-
                        </p>
                    </div>
                    <div className="col-md-2"></div>

                    <div className="col-md-1"></div>
                    <div className="col-md-2 army">
                        <img src={ranchi} alt='Army Public School' className='img-fluid school-img ' />
                        <p className='text-center  data'>APS Ranchi</p>
                        <div className="middle">
                            <img src={pc} alt="pc" className='img-fluid pc' />
                            <div className="text my-2">Read More</div>
                        </div>
                    </div>
                    <div className="col-md-2 army">
                        <img src={chandimandir} alt='Army Public School' className='img-fluid ' />
                        <p className='text-center data'>APS Chandimandir</p>
                    </div>
                    <div className="col-md-2 army">
                        <img src={armyschool} alt='Army Public School' className='img-fluid  ' />
                        <p className='text-center data'>APS Yol Cantt</p>
                    </div>
                    <div className="col-md-2  army">
                        <img src={mathura} alt='Army Public School' className='img-fluid ' />
                        <p className='text-center data'>APS Mathura Cantt</p>
                    </div>
                    <div className="col-md-2  army">
                        <img src={kanpur} alt='Army Public School' className='img-fluid ' />
                        <p className='text-center data'>APS kanpur</p>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>

        </section>
    )
}

export default Programm