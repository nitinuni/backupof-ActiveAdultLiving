import React, { useEffect } from 'react'
import logo from  './images/AAL-logo-white-without-U.png'
import earth from './images/1404153328earth-spinning-rotating-animation-15.gif'
import searchImae from './images/deeds-search-icon-removebg-preview.png'
// import JSONDATA from '../MOCK_DATA.json'
import { useState } from 'react'  
import SearchField from './SearchField'
// import axios from "axios";                                        
export default function NavbarPlaces() {
  const[SearchTerm , SetSearchTerm] = useState('')
        
  useEffect(()=>{
  console.log('SearchTerm')
  },[SearchTerm])
  return (
    <>
      <nav className="px-lg-2 px-xxl-5  shadow  py-xxl-3 px-sm-2 px-0 px-md-2 navbar navbar-expand-lg secondary_btn bg-light">
             <div className="container-fluid mx-xxl-3 mx-xl-4">
             <a href='/' className="navbar-brand w-sm-50 w-25 w-md-50 w-lg-25 w-xxl-25 w-xl-25" to="/">               
                   <img src={logo} alt=""   className="logo align-text-top w-100 w-sm-50 w-md-25 "/> </a>
                 <button className="navbar-toggler ml-auto   " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon text-black    "></span>
                </button>
                 <div className="collapse navbar-collapse mr-auto " id="navbarSupportedContent">           
                     <div className='col px-xxl-5 px-lg-0   d-flex flex-column '> 
                     <div className=' d-flex     justify-content-end'>

     <div id='searchBox' className='position-relative'>
     {/* <img src={searchImae} className="ms-2" style={{width:"55px",height:"55px",marginLeft:"15px"}} alt="searchImage" id="secondIcond"></img> */}
     
     {/* <input type="text" placeholder='Search Community , State , City , etc' onChange={event => SetSearchTerm(event.target.value)}/> */}
     {/* <ul className="list-group   position-absolute top-100 start-50 translate-middle w-75 h-25 " data-bs-spy="scroll" >
     {JSONDATA.filter((val)=> { if(SearchTerm == "") { return val}
      else if  ( val.first_name.toLowerCase().includes(SearchTerm.toLowerCase()) ){ return val  }}).map((val , key ) => {
          return    <li className="list-group-item " key={key}>
                    <a href='/'>   {val.first_name} </a></li>
  

        })}</ul>     */}
                <SearchField className=""/>
        

     
     {/* <img src={earth} alt="earthgiffile" id="secondIcond"></img> */}
    
     </div>
     
   

</div>
<div className='justify-content-end d-flex'>
<span className='fs-6' > Advansed Search</span>
</div>
                      </div>
                     
                    
                     <div className='row justify-content-center g-3 align-items-center'>
                     <div className='d-flex justify-content-end'>
                     <button type="button" className="btn secondary  rounded-pill text-dark bg-light  form-check my-sm-1 mx-md-0 my-sm-0 my-xxl-0 ">Sign in</button>
                    </div>
                    <div className='d-flex justify-content-end'>
                     <button type="button" className="btn secondary  rounded-pill text-dark create_accout_button form-check my-sm-1  text-white  my-sm-0 my-xxl-0 ">Create Account</button>
                     </div>
                     </div>
                 </div>
             </div>
         </nav>


    </>
  )
}
