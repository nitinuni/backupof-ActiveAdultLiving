import * as React from 'react';
import PropTypes from 'prop-types';
import MapChart from './MapChart';
import Canada from './Canada'
import usa from './images/107-1076696_us-usa-flag-round-png-removebg-preview.png'
import canadaFlag from './images/1200px-Flag_of_Canada__leaf_.svg-removebg-preview.png'


const mystyle = {
   width: "55px"};
const mystyleus = {
   width: "55px" };


const backgrnd = {
    background: "transparent"
}



export default function Maptabs() {
const [activeTab, setActiveTab] = React.useState('home')

  return (
    <div className='container-fluid maps_background py-5 mt-2 px-xxl-5 px-xl-5 px-md-3 px-md-1 form_section'>
  <div className='container '>
      <div className='row mt-5'>
        <div className='col-6 justify-content-xl-end justify-content-md-end justify-content-sm-center justify-content-center justify-content-xl-end    d-flex'>
        <button style={backgrnd} onClick={() => { setActiveTab('home') }} className={activeTab == 'home' ? 'active usa_button' : 'usa_button'}><img style={mystyleus} className='  '  src={usa}></img> <br/> <h5 className='bold'>U.S.A</h5> </button>
        </div>
        <div className='col-6 justify-content-xl-start justify-content-md-start justify-content-sm-center justify-content-xl-start   d-flex'>
        <button style={backgrnd} onClick={() => { setActiveTab('profile') }} className={activeTab == 'profile' ? 'active Canada_button' : 'Canada_button'}><img style={mystyle} className=''  src={canadaFlag}></img><br/> <h5 className='bold'>CANADA</h5></button>
        </div>
      </div>
      <div className='content_box '>
      {activeTab == 'home' ?
          <div> <MapChart /></div>
          : <div className='d-flex justify-content-center canada_map'> <Canada /></div>}
      </div>
    
    </div>
    </div>
  );
}
