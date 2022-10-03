import React from 'react'
import {Routes,Route} from "react-router-dom";
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Services from './component/Services/Services';
import Home from './component/Home/Home';
import Header from './component/Shared/Header/Header'
import Error from './component/Shared/Error/Error'



const App = () => {
  return (
    <>
    <Header />
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/services' element={<Services />}/>
    <Route path="*" element={<Error />}/>
    </Routes>
    </>
  )
}

export default App