
import React from 'react'
import { useState , useEffect } from 'react'
import HeartRed from './images/red-heart-11530996807g7ynit0qao-removebg-preview.png'
import LocationImg from './images/location.png'
import HeartBlack from './images/blue-heart-11530996807g7ynit0qao-removebg-preview.png'
import axios from 'axios'
import CardsPaginationplace from './CardsPaginationplace'




function Tabs() {
//  npm pagination starts


//  npm pagination ends 

const [count, setCount] = useState(1);
const [HeartImages, setImage] = useState(false);
const [ApiDataCountries, SetApiDataCountries] = useState([]);
const [loading, setLoading] = useState("loading...");
const getApiDataCountries = () => {

  axios
    .get("https://univisionz.in/aal/public/api/homepagecanadaCommunities")
    .then(({ data }) => {
      console.log("My Data");
       console.log(data.data)
      SetApiDataCountries(data.data);
      setLoading();

    }).catch((err) => { });
};


useEffect(() => {
  getApiDataCountries();
  // getMyData();
}, []);


  const TablateActive = (index) => {
    console.log('this is working');
    setCount(index)
  }

return (
    <>

      <ul className='tabs_itms'>
        <li className="tab_bar">
          <a className={count === 1 ? "Active_tab " : " tab"} href="/" onClick={() => TablateActive(1)}> first one </a>
        </li>
        <li className="tab_bar">
          <a className={count === 2 ? "Active_tab" : "tab"} href="/" onClick={() => TablateActive(2)}> Second one </a>
        </li>
        <li className="tab_bar">
          <a className={count === 3 ? "Active_tab " : "tab"} href="/" onClick={() => TablateActive(3)}> Third one </a>
        </li>
      </ul>


      <div className='container-flex mt-3'>
        <div className={count === 1 ? "Active_content " : "tab_hidden"}  >
          <h2 className='section_headings' >670 Communities in Florida </h2>
          <a href='/'>View All</a>
          <div className='row'>
            <div className='col'>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-start">
                  <li className="page-item disabled">
                    <a className="page-link text-dark" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>

            </div>
            <div className='col'>
              <div className='row'>
                <div className='col justify-content-end d-flex'>
                  <div className="dropdown">
                    <a className="btn how_itworks text-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      Page Results <span className='fw-lighter fs-6'> 25</span>
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                </div>
                <div className='col justify-content-end d-flex'>
                  <div className="dropdown">
                    <a className="btn how_itworks text-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      Sort By <span className='fw-lighter fs-6'>Relevence</span>
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>


          {/* {loading ? ( <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>) : ApiDataCountries.map((data, index) => {
          return (
          <div className="card my-4 rounded-3 shadow" key={index}>
            <div className="row g-0">

              <div className="col-md-4">
                <img src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990__340.jpg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className='row mb-2'>
                    <div className='col'>
                      <h5 className="card-title section_headings position-relative">{data.community_name}<sup>®</sup></h5>
                      <span className="badge rounded-pill bg-secondary shadow ">
    <img src={LocationImg} className="img-fluid h-100" style={{ width: "20px" }} alt="locationDecorativeimage"></img> Primary</span> </div>
                    <div className='col d-flex justify-content-end  rounded-circle border-dark  '>

                      <img src={HeartImages  ? HeartBlack : HeartRed  } alt="Heartimg"   
                         onClick={() => setImage(HeartRed => !HeartRed)}
                        style={{ width: "30px", height: "30px" }} className=' rounded-circle border-dark  ' ></img>

                    </div>
                  </div>
                  {/* <div className='row'>
                    <div className='col'>
                      <ul className='itenary' style={{ listStyleType: 'none' }}>
                        <li><i className="fa-solid fa-tag me-3 section_headings"></i> lorem Ipsum</li>
                        <li><i className="fa-solid fa-house me-3 section_headings"></i> lorem Ipsum </li>
                        <li><i className="fa-solid fa-circle-check me-3 section_headings"></i> lorem Ipsum</li>
                        <li><i className="fa-sharp fa-solid fa-flag me-3 section_headings"></i> lorem Ipsum </li>
                      </ul> </div>
                    <div className='col flex-column text-end aling-items-end justify-content-end  border-dark  '>
                      <p className="card-text text-end"><small className="text-muted">Last updated 3 mins ago</small></p>
                      <a href="/" className="btn shadow rounded-pill secondary_btn">Read More</a>
                    </div>
                  </div> */}
                  
                {/* </div>

              </div> */}
            {/* </div>
          </div> */}
          {/* ) }) } */} 
          {/* } */}
          <CardsPaginationplace/>

          <div className='row'>
            <div className='col'>
            <div className='row'>
              <div className='row'>
                <div className="col justify-content-start d-flex">
                <div className="dropdown"><a className="btn how_itworks text-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Page Results <span className="fw-lighter fs-6"> 25</span></a><ul className="dropdown-menu" aria-labelledby="dropdownMenuLink"><li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </div>
                </div>
                <div className="col justify-content-start d-flex"><div className="dropdown"><a className="btn how_itworks text-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Sort By <span className="fw-lighter fs-6">Relevence</span></a><ul className="dropdown-menu" aria-labelledby="dropdownMenuLink"><li><a className="dropdown-item" href="#">Action</a></li><li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul></div></div></div></div></div>
                <div className='col'>
            <div className='col'>
               <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                  <a className="page-link text-dark" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>    </div></div>

          </div>

        </div>
        <div className={count === 2 ? "Active_content" : "tab_hidden"} >
          <h1>two</h1>
          <p >Note that navigation bars, even if visually styled as tabs with the .nav-tabs class, should not be given role="tablist", role="tab" or role="tabpanel" attributes. These are only appropriate for dynamic tabbed interfaces, as described in the WAI ARIA Authoring Practices. See JavaScript behavior for dynamic tabbed interfaces in this section for an example. The aria-current attribute is not necessary on dynamic tabbed interfaces since our JavaScript handles the selected state by adding aria-selected="true" on the active tab.</p>
        </div>
        <div className={count === 3 ? "Active_content" : "tab_hidden"} >
          <h1>three</h1>
          <p> Note that navigation bars, even if visually styled as tabs with the .nav-tabs class, should not be given role="tablist", role="tab" or role="tabpanel" attributes. These are only appropriate for dynamic tabbed interfaces, as described in the WAI ARIA Authoring Practices. See JavaScript behavior for dynamic tabbed interfaces in this section for an example. The aria-current attribute is not necessary on dynamic tabbed interfaces since our JavaScript handles the selected state by adding aria-selected="true" on the active tab.</p>
        </div>
      </div>
    </>
  )
}


export default Tabs