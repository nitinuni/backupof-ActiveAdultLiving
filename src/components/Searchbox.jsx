import React from 'react'
import PropTypes from 'prop-types'
 

 export default function  Searchbox(props)  {
  return (
   

  <div className=' d-flex   justify-content-center'>
    <form action='' className='search_bar'>
      <input type='' placeholder='Search Community , State , City , etc' name='q'>
      </input>
      <button type="submit" className='rounded-pill'><i className={`fa fa-search   text-${props.mode==='light'?'dark':'light'}`}></i> </button>
    </form>
  </div>
)
}

Searchbox.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Searchbox.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };



// export default Searchbox
