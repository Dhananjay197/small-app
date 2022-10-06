import Productivity from '../component/Home/Productivity/Productivity';
import React from 'react'
import Banner from '../component/Home/Banner/Banner';
import Heading from '../component/Home/Heading/Heading';
import InterfaceStyle from '../component/Home/InterfaceStyle/InterfaceStyle';
import PromoVedio from '../component/Home/PromoVedio/PromoVedio';
import SocialApp from '../component/Home/SocialApp/SocialApp';
import Programm from '../component/Home/Programm/Programm';




const Home = () => {
  return (
    <div>
      <Banner />
      <Heading />
      <Productivity />
      <InterfaceStyle />
      <PromoVedio />
      <SocialApp />
      <Programm />
    </div>
  )
}

export default Home