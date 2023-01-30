
import React from 'react'
import BackToTopButton from './BackToTopButton'
import Filters from './Filters'
import ImageCard from './ImageCard'
import NavbarPlaces from './NavbarPlaces'
import Tabs from './Tabs'
import WeAreHere from './WeAreHere'





function Place() {

 
  return (
    <>
<NavbarPlaces/>
<div className='container '>
     <div className='row justify-content-center'>
    <div className='col-12 m-xxl-5 m-xl-5 m-lg-3 m-md-3 m-sm-3 text-center '>
        <h1 className='section_headings text-break'>Florida 55+ Active Adult Retirement Communities  </h1>
    </div>

     </div>
     <div className='row'>
   
     <div className='col-xl-8 col-xxl-8 col-lg-12 col-md-12  p-2   right_section_con'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14521638.285109874!2d-92.82342782189147!3d27.30311420794963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C%20USA!5e0!3m2!1sen!2sin!4v1674125431045!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
     </div>
     <div className="col-xxl-4  col-xl-4 col-lg-12 col-md-12 shadow rounded p-2 p-xl-4 p-xxl-4 px-md-3 px-lg-3 px-md-3 m-0 m-sm-3 m-md-0 m-lg-0 m-xxl-0 m-xl-0 secondary_btn text-light">
      <h3 >Communities Florida</h3>
      <h6 className='fs-5'>Florida(673) </h6>
      <ul style={{listStyleType:"index",padding:"auto 20px" }}>
     <li>Central Florida(98) </li>
    <li>
    <ul style={{listStyleType:"index",padding:"auto 20px" }}>
      <li>Orlando-Kissimmee Area <span  className='fs-5' >(15)</span> </li>
      <li>Clermont-Leesburg-Mt. Dora Area <span className='fs-5' >(19)</span></li>
      <li>Lakeland-Winter Haven Area <span className='fs-5' >(26)</span> </li>
      <li>The Villages <span className='fs-5' >(1)</span> </li>
      <li>DeLand-Sanford Area <span className='fs-5' >(3)</span> </li>
      <li>Ocala Area  <span className='fs-5' >(28)</span> </li>
    </ul>
  </li>
</ul>
<button type="button" className="btn secondary  rounded-pill text-dark bg-light  form-check my-sm-1 mx-md-0 my-sm-0 my-xxl-0 ">Show More <i className="fa-sharp fa-solid fa-caret-down"></i></button>
     </div> 
     </div>
     <div className='row'>
        <div className='col-8'> 
        <Tabs/>
        </div>
        <div className='col-4 mt-3'>
         <WeAreHere/>
         <Filters/>
         <ImageCard/>
        </div>
     </div>
 </div>
 <BackToTopButton/>
 </>  ) }

export default Place