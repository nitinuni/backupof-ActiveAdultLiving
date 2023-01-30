import React from 'react'
import PropTypes from 'prop-types'
// import MapChart from './MapChart';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import PhoneIcon from '@mui/icons-material/Phone';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import PersonPinIcon from '@mui/icons-material/PersonPin';

export default function Howitworks(props) {
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  return (
    <div>
    <div className="container-fluid px-lg-0  px-md-1 how_itworks px-sm-0 py-5 ">
    <h2 className="text-center white_text"> How it Works   </h2>
      
    <div className="row row g-2 g-3 ctgrs  px-lg-0 px-xxl-5 px-md-2 px-sm-2 mx-md-2 mx-sm-2  mx-lg-5 mx-xxl-5 mx-sm-2 mx-md-2">
    <div className="col-sm-4 col-md-12 col-lg-4 col-xl-4 col-xxl-4  text-white">
    <div className="row">
    <div className="col-2 col-sm-2 text-white section-company-map justify-content-center align-items-center"> <span className='fw-bold'>1</span></div>

    <div className="col text-dark">
    <hr  className="text-white "></hr>
    <p className="text-white "> Search </p>
    <p className="text-white " >Begin your search for communities by state, province, or preferred lifestyle.</p>


    </div>
  </div></div>
    <div className="col-sm-4 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
    <div className="row">
    <div className="col-2 col-sm-2 text-white section-company-map"> <span className='fw-bold' >2</span></div>
    <div className="col text-dark">
    <div className="col text-dark">
    <hr className="text-white " ></hr>
    <p className="text-white "> Review </p>
      <p className="text-white">Review Hundreds of exciting and incredible results from our database</p>
          </div>
    </div>
  </div>
  </div>
    <div className="col-sm-4 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
    <div className="row">
    <div className="col-2 col-sm-2 text-white section-company-map">
        <span className='fw-bold' >3</span>
    </div>
    <div className="col  text-dark"> 
    <hr className="text-white " ></hr>          
    <p className="text-white "> Contact </p>
      <p className="text-white ">Explore community details and contact the right one for you.</p>
    </div>
  </div>
  </div>
  </div>
         
     </div>
     <div className="container my-3 mt-5 text-align-center">
         <h2 className=" text_primary text-center   "> There is a place for everyone. </h2>
         <p className={` text-center text-${props.mode==='light'?'dark':'light'}`}>Begin exploring our database of over 8500 communities .</p>
  </div></div> )
  
}

Howitworks.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Howitworks.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };


