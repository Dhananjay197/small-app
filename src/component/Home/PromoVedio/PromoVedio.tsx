import React  from 'react';
import './PromoVedio.scss';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const PromoVedio = () => {
    return (
        <>
            <section className='promo py-5'>
                <div className="container text-center py-5">
                  <div className='content'>
                  <h2 className='text-center head'>Watch Our Promo Video</h2>
                    <p className='text-center text-muted'>Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus
                    </p>
                    {/* <a  data-fancybox href="https://www.youtube.com/watch?v=jrkvirglgaQ">
                        <PlayCircleIcon/>
                    </a> */}
                   
<a type="" className="" data-bs-toggle="modal" data-bs-target="#exampleModal">

<PlayCircleIcon/>
</a>

<div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <iframe width="720" height="400" className='modal-vedio' src="https://www.youtube.com/embed/OzISPBpzwkI" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

      </div>
      </div>
    </div>
  </div>
</div>
                    
                 
                    
                </div>
            </section>
        </>
    )
}

export default PromoVedio