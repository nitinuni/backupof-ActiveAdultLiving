import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Myfile = () => {
    const [myApiData, setMyApiData] = useState([]);

    const getMyData = ()=>{
axios.get("https://univisionz.in/aal/public/api/featuredCommunities").then((result) => {
    console.log(result.data.data);
    setMyApiData(result.data.data);
}).catch((err) => {
    
});

    }
    useEffect(()=>{
getMyData();
    },[])

  return (
    <div>
    {myApiData.map((data, index)=>{
return(

    <h1>{data.title}</h1>
)
    })}
      <h1>Hello</h1>
    </div>
  )
}

export default Myfile
