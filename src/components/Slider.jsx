import React from 'react'
import Searchbox from './Searchbox'
// import mySliderImage from "./images/hero-image.png"



export default function Slider() {
  // const myN = require('./images/hero-image.png');
  return (
    <>
 <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/heroimageNew.png'})` , backgroundRepeat: 'no-repeat', backgroundPosition: 'center' , backgroundSize: 'cover' }} className='container-fluid  justify-content-center align-items-center p-xl-5 p-xxl-5 p-lg-4 p-md-3  '>
 <div className='row  justify-content-center align-center p-2 p-xl-5 p-xxl-5 p-lg-4 p-md-3 m-xl-5 m-xxl-5 m-lg-4 m-md-3' >
  <div className='col  text-center  justify-content-center aling-items-center p-xl-5 p-xxl-5 p-lg-4 p-md-3 m-xl-5 m-xxl-5 m-lg-4 m-md-3'>
    <h5 className='text-light h1 text-break'>Your Community Awaits</h5>
              <p className='text-light text-break '>Find your 55+ community, active lifestyle new home, resale
                home, manufactured home or rental </p>
              <Searchbox />
                </div>
                </div></div>
  
 
    </>
  )
}
