import HeroParallaxDemo from '@/components/FinalSplash'
import Footer from '@/components/Footer'
import Navba2r from '@/components/Navbar'
import LampDemo from '@/components/NextSplash'
import  ImagesSliderDemo  from '@/components/Splash'
import React from 'react'

const spalshPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
        <Navba2r/>
        <ImagesSliderDemo/>
         <LampDemo/>
         <HeroParallaxDemo/>
        <Footer/>
    </section>
     
  )
}

export default spalshPage