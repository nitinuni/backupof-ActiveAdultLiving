import React from 'react'
import logo from  './images/AAL-logo-white-without-U.png'


const StylingCard = {
      background:"url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg')",
}

const stylingLogo = {
      width:"200px",

}




function ImageCard() {
  return (
    <>
    <div className="card mt-3 p-3" style={StylingCard} >
        <img src={logo}  style={stylingLogo} className="" alt="logo_again"></img>
  <div className="card-body align-content-start">
    <h5 className="card-title text-start text-white">Sell you Home With</h5>
    <p className="card-text text-white text-start">Activeadultliving.com</p>
    <a href="#" className="btn btn-outline-light  text-white">Get Started</a>
  </div>
</div>
    
    
    
    </>
   
  )
}

export default ImageCard