import React from 'react'
import './Header.scss';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../../assets/images/logo.png";


const Header = () => {

  //aasigning location variable
  const location = useLocation();

  //destructing pathname from location
  const { pathname } = location;

  //javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

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
              
                 <li className="nav-item dropdown dropdown-right mx-2">
                  <Link to="/" className={`nav-link dropdown-toggle  ${splitLocation[1] === "" ? "active" : ""}`} >
                   HOME
                  </Link>
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
                  <Link to="/pages" className={`nav-link  dropdown-toggle ${splitLocation[1] === "pages" ? "active" : ""}`}  >
                    PAGES
                  </Link>
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
                  <Link to="/about" className={`nav-link  ${splitLocation[1] === "about" ? "active" : ""}`}>ABOUT</Link>
                </li>
                <li className="nav-item mx-2">
                <Link to="/contact" className={`nav-link  ${splitLocation[1] === "contact" ? "active" : ""}`}>CONTACT</Link>
                </li> <li className="nav-item mx-2">
                  <Link to="/product" className={`nav-link  ${splitLocation[1] === "about" ? "active" : ""}`}>PRODUCT</Link>
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


