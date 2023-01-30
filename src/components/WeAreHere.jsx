import React from 'react'
import ContactImage from './images/customerServiceExecutive.png.png'

function WeAreHere() {
  return (
    <>
   <div className="card  rounded-3 shadow  mb-3 p-2 justify-content-center align-items-center" >
   <img src={ContactImage} className="shodow" style={{width:"100px"}} ></img>
  <h2 className="card-header text-center">We're here to help !</h2>
  <div className="card-body">
    
    <p className="card-text">Call us to talk with a custormer service represent.</p>
  </div>
  <div className="card-footer bg-transparent border-success">
  <h3 className="card-title"><span className='section_headings'>Call Us:</span>(800)54788951</h3>
  </div>
 </div>
    </>
  )
}

export default WeAreHere