import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export default function Categories(props) {
  const [myApiData, setMyApiData] = useState([]);
  const [myApiDataCanada, setMyApiDataCanada] = useState([]);
  const [loading, setLoading] = useState("loading...");
  // Data for  the canadian communities
  const getMyDataCanada = () => {

    axios
      .get("https://univisionz.in/aal/public/api/homepagecanadaCommunities")
      .then(({ data }) => {
        console.log("My Data");
         console.log(data.data)
        setMyApiDataCanada(data.data);
        setLoading(); })
      .catch((err) => {});};
  // Data for  the USA communities
  const getMyData = () => {
    axios
      .get("https://univisionz.in/aal/public/api/featuredCommunities")
      .then((result) => {
        setMyApiData(result.data.data);
        setLoading();
      })
      .catch((err) => {});
  };

  
  useEffect(() => {
    getMyDataCanada();
    getMyData();
  }, []);
  return (
    <div className="container-fluid px-lg-0   px-md-1 px-sm-0 ">
      <div className="row g-2 g-5 g-md-3 g-sm-2 mx-2 my-5 px-lg-0 px-xxl-5 px-md-2 px-sm-2 mx-md-2 mx-sm-2  mx-lg-5 mx-xxl-5 mx-sm-2 mx-md-2 h-100">
        <h5 className={`text-start p-0 my-2  text-${props.mode === "light" ? "dark" : "light" }`}>EXPLORE </h5>
        <h2  className="section_headings p-0 my-2 text-start">Featured USA Communities</h2>
        {loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          myApiData.map((data, index) => {
            return (
              <div className="col-lg-4  card-group col-xl-6 col-xxl-6 col-md-12 col-sm-12 pl-0   " key={index} >
                <div className="card ctrgpg mb-3 rounded-2 shadow h-100">
                  <div className="row g-0 h-100">
                    <div className="col-md-4  col-xl-4 col-12 col-sm-12 col-xxl-4 col-lg-12 col-sm-4 col-4  ">
                      <img src={`https://images.activeadultliving.com/uploads/${data.uploadImage}`} className="img-fluid rounded-start featured_image h-100  w-100  " alt={data.uploadImage}            />
                    </div>
                    <div className="col-md-8 col-lg-12 col-12 col-sm-12 col-lg-8 col-xl-8 col-xxl-8 ">
                      <div className="card-body">
                        <h5 className="card-title text-break text_primary">{data.title}</h5>
                        <span className="badge rounded-pill bg-secondary">{data.created}</span>
                        <p className="card-text  text-break ttxt">
                          {data.description.replace(/<\/?[^>]+(>|$)/g, "")}
                        </p>
                        <a href={data.link}>
                          <button type="button" className="btn rounded-pill secondary_btn">
                            Read More
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           
            );
          })
        )}
      </div>

      <div className="row g-2 g-3 mx-2 my-5 px-lg-0 px-xxl-5 px-md-2 px-sm-2 mx-md-2 mx-sm-2  mx-lg-5 mx-xxl-5 mx-sm-2 mx-md-2 h- ">
        <h5 className={`text-start p-0 my-2  text-${ props.mode === "light" ? "dark" : "light"
          }`} >{" "} EXPLORE{" "} </h5>
        <h2 className="text-start section_headings p-0 my-2"> Featured Canadian Communities </h2>
        {loading ? ( <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>) : myApiDataCanada.map((data, index) => {
          return (
            <div className="col-md-6 col col-lg-4 col-xl-4 col-xxl-4 col-sm-12 col-12 card-group card-columns card-deckh-50 mt-4" key={index}>
              <div className="card rounded-3 canada h-100 shadow  ">
                {/* <div className="card-header secondary">{data.community_name}</div> */}
                <div className="card-body text-dark">
                  <h5 className="card-title word-break">{data.community_name}</h5>
                  <p className="card-text word-break ">
                    {data.community_desc.replace(/<\/?[^>]+(>|$)/g, "")}
                  </p>
                  <a href="/" className="btn shadow rounded-pill secondary_btn">Read More</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// export default Categories

Categories.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Categories.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
