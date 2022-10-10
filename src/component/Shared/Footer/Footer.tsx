import React from 'react'
import './Footer.scss';
import smalllogo from "../../../assets/images/logo-alt.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';



const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <div className="container p-5 ">
          <div className="row">
            <div className="col-md-4">
              <img src={smalllogo} alt="logo" className='img-fluid' />
              <ul className='social-icon list-inline'>
                <li className='list-inline-item'>
                  <a href="https://www.facebook.com"><FacebookIcon /></a>
                </li>
                <li className='list-inline-item'>
                  <a href="https://www.twitter.com"><TwitterIcon /></a>
                </li>
                <li className='list-inline-item'>
                  <a href="https://www.instagram.com"><InstagramIcon /></a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 social-icon2 ">
              <h6 className='head text-light'>PRODUCT</h6>
              <ul>
                <li className="mb-2"><a href="#" className='text-muted '>Teams</a></li>
                <li className="mb-2"><a href="#" className='text-muted'>Blogs</a></li>
                <li className="mb-2"><a href="#" className='text-muted'>FAQs</a></li>
              </ul>
            </div>
            <div className="col-md-2 social-icon2">
              <h6 className='head text-light'>RESOURCES</h6>
              <ul>
                <li className="mb-2"><a href="#" className='text-muted'>Signup</a></li>
                <li className="mb-2"><a href="#" className='text-muted'>Login</a></li>
                <li className="mb-2"><a href="#" className='text-muted'>Blog</a></li>
              </ul>
            </div>
            <div className="col-md-2 social-icon2 ">
              <h6 className='head text-light'>COMPANY</h6>
              <ul>
                <li className="mb-2"><a href="#" className='text-muted'>Career</a></li>
                <li className="mb-2"><a href="#" className='text-muted'>Contact</a></li>
                <li className="mb-2"><a href="#" className='text-muted'>Investor</a></li>
                <li className="mb-2"><a href="#" className='text-muted'>Terms</a></li>
              </ul>
            </div>
            <div className="col-md-2 social-icon2">
              <h6 className='head text-light'>COMPANY</h6>
              <ul>
                <li className="mb-2"><a href="#" className='text-muted'>About</a></li>
                <li className="mb-2"><a href="#" className='text-muted'>Contact</a></li>
                <li className="mb-2"><a href="#" className='text-muted'>Team</a></li>
                <li className="mb-2"><a href="#" className='text-muted'>Privacy Policy</a></li>
              </ul>
            </div>


          </div>
        </div>
      </div>
      
      <div className="container-fluid bg-dark">
          <div className="col-md-12  last-footer">
            <p className='text-center text-muted last-para p-2'>Copyright © 2022. Designed & Developed by Themefisher</p>
            <h6 className='text-center text-muted last-para p-3'>Distributed By <span>Themewagon</span></h6>
          </div>
        </div>
    </footer>
  )
}

export default Footer