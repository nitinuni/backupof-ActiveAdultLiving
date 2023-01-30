
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

    export default function BlogPost(props) {
      const [myApiDataBlog, setmyApiDataBlog] = useState([]);


      const getMyDataBlog = () => {
        axios.get("https://univisionz.in/aal/public/api/homepageBlog").then((result) => {
          // console.log(result.data.data)
      setmyApiDataBlog(result.data.data);
        }).catch((err) => {
    
        });
        
      }

      useEffect(() => {
        getMyDataBlog();
   
      }, [])
      return (

    <div className='container-fluid px-lg-0  px-md-1 px-sm-0 '>
    <div className="row g-2 g-3 mx-2 my-5 px-lg-0 px-xxl-5 px-md-2 px-sm-2 mx-md-2 mx-sm-2  mx-lg-5 mx-xxl-5 mx-sm-2 mx-md-2 h-100">
<h5 className={`text-start p-0 my-2 text-${props.mode==='light'?'dark':'light'}`} >READ</h5>
<h2 className="p-0 my-2 section_headings">Latest Blog Articles</h2>
{myApiDataBlog.map((data, index)=>{
return(
  <div className="col-xl-3 col-xxl-3  blogs   col-sm-12 col-md-6 col-lg-3 mt-3" key={index}>
  <div className="card  rounded-3 h-100 shadow">
      <img src={data.image} className="card-img-top " alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{data.post_title}</h5>
        <p className="card-text">{data.post_content.replace(/<\/?[^>]+(>|$)/g, "")}</p>
        <button type="button" className="btn shadow  secondary_btn  rounded-pill">Read More</button>
      </div>
    </div>
  </div>)
  
})}
</div>

    </div>)}

// export default BlogPost

BlogPost.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

BlogPost.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  }
