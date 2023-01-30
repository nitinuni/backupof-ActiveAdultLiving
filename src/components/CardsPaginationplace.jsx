import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import HeartRed from './images/red-heart-11530996807g7ynit0qao-removebg-preview.png'
import LocationImg from './images/location.png'
import HeartBlack from './images/blue-heart-11530996807g7ynit0qao-removebg-preview.png'



const CardsPaginationplace = () => {
  const [postsPerPage] = useState(5);
  const [offset, setOffset] = useState(1);
  const [displayAllPost, setDisplayAllPost] = useState([]);
  const [APIData, setAPIData] = useState([]);
  const [pageCount, setPageCount] = useState(0)
  const [searchData, setSearchData] = useState('');

  useEffect(() => {
    getAllPosts()
  }, [offset])

  const getAllPosts = async () => {
    const res = await axios.get(`https://univisionz.in/aal/public/api/search/fl`)
    const response = res.data.data;
    setAPIData(response);
  };

  useEffect(() => {
    console.log("shwo all data==>",APIData)
    if (APIData) {
      const filterData = !searchData
        ? APIData
        : APIData.filter((CurrentElement) =>
          CurrentElement.name.toLowerCase().includes(searchData.toLowerCase())
        );
      const perPageData = filterData.slice(offset - 1, offset - 1 + postsPerPage)
      const getData = getPostData(perPageData)

      setDisplayAllPost(getData)
      setPageCount(Math.ceil(filterData.length / postsPerPage))
    }

  }, [APIData, searchData])

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setOffset(selectedPage + 1)
  };


  const getPostData = (data) => {
    return (
      data.map(post => <div className="row" key={post.id}>
    
                 <div className="card my-4 rounded-3 shadow" >
            <div className="row g-0">

              <div className="col-md-4">
                <img src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990__340.jpg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className='row mb-2'>
                    <div className='col'>
                      <h5 className="card-title section_headings position-relative">{post.name}<sup>®</sup></h5>
                      <span className="badge rounded-pill bg-secondary shadow ">
    {/* <img src={LocationImg} className="img-fluid h-100" style={{ width: "20px" }} alt="locationDecorativeimage"></img>  */}
    Primary</span> </div>
                    <div className='col d-flex justify-content-end  rounded-circle border-dark '>

                      {/* <img src={HeartImages  ? HeartBlack : HeartRed  } alt="Heartimg"   
                         onClick={() => setImage(HeartRed => !HeartRed)}
                        style={{ width: "30px", height: "30px" }} className=' rounded-circle border-dark  ' ></img> */}

                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      <ul className='itenary' style={{ listStyleType: 'none' }}>
                        <li><i className="fa-solid fa-tag me-3 section_headings"></i> lorem Ipsum</li>
                        <li><i className="fa-solid fa-house me-3 section_headings"></i> lorem Ipsum </li>
                        <li><i className="fa-solid fa-circle-check me-3 section_headings"></i> lorem Ipsum</li>
                        <li><i className="fa-sharp fa-solid fa-flag me-3 section_headings"></i> lorem Ipsum </li>
                      </ul> </div>
                    <div className='col flex-column text-end aling-items-end justify-content-end  border-dark  '>
                      <p className="card-text text-end"><small className="text-muted"> {post.id}</small></p>
                      <a href="/" className="btn shadow rounded-pill secondary_btn">Read More</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

      </div>
      
      
      
      
      )
    )

  }

  return (
    <>
    
      {/* <input
        type='search'
        placeholder='Searching...'
        onChange={(e) => setSearchData(e.target.value)}  /> */}
      <div className="main-app">
        {/* Display all the posts */}
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} />
        {displayAllPost}

        {/* Using React Paginate */}
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} />
      </div>
    </>
  );


};

export default CardsPaginationplace;