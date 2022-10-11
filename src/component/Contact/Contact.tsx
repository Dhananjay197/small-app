import React from 'react'
import './Contact.scss'
import imgg from '../../assets/images/Group 87.svg'
const Contact = () => {
  return (
    <>
      <section className='contact-image '>
        <div className='row'>
          <div className="col-lg-6 class-image">

            <img src={imgg} height="400px" width="100%" />
            <h3></h3>

          </div>
          <div className="col-lg-6">
            <div className='form-page'>
              <form className='form-area'>
                <div className="mb-3 form-table">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 form-table ">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label"> Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>


      </section>
    </>
  )
}

export default Contact