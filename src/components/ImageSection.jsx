import React from 'react'

function ImageSection() {
  return (
    <>
   <div className="container-fluid mx-auto  mb-5">
        <div className="row justify-content-center explore-row   px-xxl-5 px-sm-0 mx-sm-0 mx-lg-5 mx-xl-5 mx-xxl-5">
          <div className="col-lg-12 col-md-12 col-12">

            <div className="bg-img  h-sm-50 h-md-50">
              <div className="bg-overlay">
                <div className="black-overlay position-relative h-sm-50 h-md-50  h-xl-100 h-xxl-100 h-lg-75">
                  <div className="txt-block w-lg-75 w-xl-75 w-xxl-75 w-md-75 w-sm-100 w-100 p-2 p-sm-2 p-md-5 p-lg-5 mx-xl-5 text-white position-absolute content-text top-50 start-50    translate-middle ">
                    <h5 className='h3 bold'>EXPLORE</h5>
                    <h2 className='display-3 bold'>Find the place you deserve. </h2>
                    <h6 className='h3'> Our database will help you find the perfect place for you to enjoy. </h6>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>

      
    </>
  )
}

export default ImageSection

