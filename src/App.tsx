import React from 'react'
import {Routes,Route} from "react-router-dom";
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Home from './pages/Home';
import Header from './component/Shared/Header/Header'
import Footer from './component/Shared/Footer/Footer';
import Error from './component/Shared/Error/Error';
import 'aos';
import Pages from './component/Pages/Pages';
import Product from './component/Product/Product';



const App = () => {
  return (
    <>
    <Header />
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/pages" element={<Pages/>}/>
    <Route path="/about" element={<About />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/product' element={<Product />}/>
  
    <Route path="*" element={<Error />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App