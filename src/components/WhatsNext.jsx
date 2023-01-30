import React from 'react'
import PropTypes from 'prop-types'

export default function WhatsNext(props) {
  return (

    <div className="container-fluid px-lg-0  px-md-1 px-sm-0   py-xxl-3 py-xl-3 px-md-2  maps_background form_section ">
      <div className="row g-2 g-3 mx-2 my-5 px-lg-0 px-xxl-5 px-md-2 px-sm-2 mx-md-2 mx-sm-2  mx-lg-5 mx-xxl-5 mx-sm-2 mx-md-2 h-100">

        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 ">
          <h5 className={`text-start  text-${props.mode === 'light' ? 'dark' : 'light'}`}>EXPLORE</h5>
          <h2 className="text-start section_headings">Discover Whats Next</h2>
          <p className="text-start text-dark">We're changing the way people 55 and older are searching for their perfect next place. With a national network of hand-selected real estate experts, plus comprehensive information, unbiased content, and on-the-go insight about thousands of communities across the country, we're a trusted resource paving the way from here to home. Whether you're interested in a low-maintenance single-level residence, an active lifestyle or age-qualified community, an intimate enclave, or anything in between, we can help you make your next move the best one yet.</p>
          <div className="d-grid gap-2 mt-5">
            <button className="btn  w-75  shadow rounded-pill secondary_btn w-md-50 mb-5 text-sm-left text-start text-md-start text-lg-start text-xl-start text-xxl-center" type="button">Learn more about Actuve Adult Living communities</button>

          </div>
        </div>
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
          <h5 className={`text-start  text-${props.mode === 'light' ? 'dark' : 'light'}`}> EXPLORE </h5>
          <h2 className="text-start section_headings">Get Weekly Updates</h2>
          <form action="/action_page.php">
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">First Name</label>
              <input type="text" className="form-control" id="email" placeholder="First Name" name="email" />

              <div className="mb-3">
                <label htmlFor="pwd" className="form-label">Password:</label>
                <input type="text" className="form-control" id="pwd" placeholder="Last Name" name="pswd" />
              </div>
              <div className="mb-3">
                <label htmlFor="pwd" className="form-label">Password:</label>
                <input type="email" className="form-control" id="pwd" placeholder="Email Address" name="pswd" />
              </div>

              <div className="input-group mt-3 mb-3">
                <button type="button" className="btn border secondary dropdown-toggle" data-bs-toggle="dropdown">

                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">National</a></li>
                  <li><a className="dropdown-item" href="/#">Arizonal</a></li>
                  <li><a className="dropdown-item" href="/">California</a></li>
                  <li><a className="dropdown-item" href="/">Florida</a></li>
                  <li><a className="dropdown-item" href="/">NorthCarolina / SouthCarolina</a></li>
                  <li><a className="dropdown-item" href="/">New Jersey</a></li>
                </ul>
                <input type="text" className="form-control" placeholder="Select Region(s) optional" />
              </div>
              <div className="form-check mb-3">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                </label>
              </div>
              <button type="submit" className="btn shadow secondary_btn  rounded-pill">Subscribe Now</button><br></br>
              <div className='mt-2' >
                <small className='mt-5'>By requesting more information, you agree that
                  activeadultliving and its affiliates, partner providers, or
                  real estate professionals may call, text, or email you about your inquiry,
                   which may be made with automated means (including SMS or text messages).
                    You understand that your consent is not a prerequisite for buying,
                     selling or renting a property. You may revoke your consent at any time by
                      contacting activeadultliving.com. Message/data rates may apply.
                       You also agree to activeadultliving.com's Privacy Policy and Terms of Use.</small></div>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

// export default WhatsNext

WhatsNext.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

WhatsNext.defaultProps = {
  title: 'Set title here',
  aboutText: 'About'
};
