import axios from "axios";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

export default function FeaturedCommunities(props) {
  const [myApiData, setMyApiData] = useState([]);
  const [loading, setLoading] = useState("loading...");
 

  const getMyData = () => {
    axios
      .get("https://univisionz.in/aal/public/api/homepageLifestyles")
      .then((result) => {
        setMyApiData(result.data.data);
        setLoading();
      })
      .catch((err) => {});
  };
  useEffect(() => {
    getMyData();
  }, []);

  return (
    <div className="container-fluid px-lg-0  px-md-1 how_itworks px-sm-0 py-3 py-xl-5 py-xxl-5 py-xl-5 py-md-3 ">
      <div className="row g-2 g-3 ctgrs py-xl-5 py-xxl-5 py-xl-5 py-md-3 px-lg-0 px-xxl-5 px-md-2 px-sm-2 mx-md-2 mx-sm-2  mx-lg-5 mx-xxl-5 mx-sm-2 mx-md-2">
      {loading ?   (
          <div className="d-flex justify-content-center ">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (

          myApiData.map((data, index) => {
          return (
            <div className="col-xl-3 col-xxl-3 col-lg-4  col-md-6  ntn_communite" key={index}>
          <a href={`https://aal.univisionz.in/${data.url}`}>
              <div className="card secondary_btn rounded-3 p-3 bg-secondary  shadow h-100 ">
              <i className="fa fa-people-group me-4  ">   </i>
                <div className="card-body fs-6 word-break"> {data.name} </div>
                <i className="fa-solid fa-arrow-right text-end  "></i>
              </div>
              </a>
            </div>
          );
        })


        )} 
      </div> 
      </div>
  );
}


FeaturedCommunities.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

FeaturedCommunities.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
