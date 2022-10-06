import React from 'react'
import './PromoVedio.scss';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const PromoVedio = () => {
    return (
        <>
            <section className='promo py-5'>
                <div className="container text-center py-5">
                  <div className='content'>
                  <h2 className='text-center head'>Watch Our Promo Video</h2>
                    <p className='text-center'>Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus
                    </p>
                    <a href="https://www.youtube.com/watch?v=jrkvirglgaQ">
                        <PlayCircleIcon/>
                    </a>
                    
                  </div>
                    
                </div>
            </section>
        </>
    )
}

export default PromoVedio