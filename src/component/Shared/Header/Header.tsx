import React from 'react'
import './Header.scss';
import logo from "../../../assets/images/logo.png";

const Header = () => {
  return (
    <section>
      <div className="container">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" className='img-fluid' />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto ">
                {/* <li className="nav-item dropdown mx-2">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    HOME
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Homepage</a></li>
                    <li><a className="dropdown-item" href="#">Homepage2</a></li>
                    <li><a className="dropdown-item" href="#">Homepage3</a></li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Submenu</a>
                      <ul className='dropdown-menu' >
                        <li><a className='dropdown-item' href='' >Submenu11</a></li>
                        <li><a className='dropdown-item' href='' >Submenu12</a></li>
                      </ul>
                    </li>
                  </ul>
                </li> */}
                 <li className="nav-item dropdown dropdown-right mx-2">
                  <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   HOME
                  </a>
                  <ul className="dropdown-menu dropdown-right-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a className="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                    Submenu    &raquo;
                      </a>
                      <ul className="dropdown-menu dropdown-submenu">
                        <li>
                          <a className="dropdown-item" href="#">Submenu item 1</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">Submenu item 2</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">Submenu item 3</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">Submenu item 4</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">Submenu item 5</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
               
                <li className="nav-item dropdown dropdown-left mx-2">
                  <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PAGES
                  </a>
                  <ul className="dropdown-menu dropdown-left-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a className="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                      &laquo; Submenu 
                      </a>
                      <ul className="dropdown-menu dropdown-submenu">
                        <li>
                          <a className="dropdown-item" href="#">Submenu item 1</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">Submenu item 2</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">Submenu item 3</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">Submenu item 4</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">Submenu item 5</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link active" aria-current="page" href="#">ABOUT</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link active" aria-current="page" href="#">CONTACT</a>
                </li>

              </ul>

            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Header


