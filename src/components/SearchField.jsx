
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import earth from './images/1404153328earth-spinning-rotating-animation-15.gif'
import searchImae from './images/deeds-search-icon-removebg-preview.png'



const SearchField  = () => {
  const [postsPerPage] = useState(5);
  const [offset, setOffset] = useState(1);
  const [displayAllPost, setDisplayAllPost] = useState([]);
  const [APIData, setAPIData] = useState([]);
  const [pageCount, setPageCount] = useState(0)
  const [searchData, setSearchData] = useState('');

  useEffect(() => {
    // this is first methos===>>>>>>>

    // const getAllPosts = async () => {
    //   const res = await axios.get(`https://univisionz.in/aal/public/api/search/${searchData}`)
    //   const response = res.data.data;
    //   setAPIData(response);
    // };
    // getAllPosts()


// this is second method=========>>>>>>>>>>>>>
    (async()=>{
    const res = await axios.get(`https://univisionz.in/aal/public/api/search/${searchData}`)
      const response = res.data.data;
      setAPIData(response);
    })()
  }, [searchData])



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
      data.map(post => <ul className="W-25 text-dark m-auto search_list" key={post.id}>
        {/* <p>User ID: {post.id}</p> */}
        <li  i className='text-light '>{post.name}</li>
      </ul>)
    )

  }

  return (
    <>
     <img src={searchImae} className="ms-2" style={{width:"55px",height:"55px",marginLeft:"15px"}} alt="searchImage" id="secondIcond"></img>
      <input
        type='search'
        placeholder='Searching...'
        onChange={(e) => setSearchData(e.target.value)}
      />
      <div className="main-app m-auto">
        {/* Display all the posts */}
        {displayAllPost}

        {/* Using React Paginate */}
        {/* <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} /> */}
      </div>
      <img src={earth} alt="earthgiffile" id="secondIcond"></img>
    </>
  );


};

export default SearchField ;