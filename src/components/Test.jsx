import React from 'react'
import JSONDATA from '../MOCK_DATA.json'
import { useState } from 'react'


function Test() {
    const[SearchTerm , SetSearchTerm] = useState('')
  return (
    <>
       <input type="text" placeholder='Search Community , State , City , etc'  onChange={(event) => {SetSearchTerm(event.target.value)}} style={{border:"2px solid black"}}/>
     {JSONDATA.filter((val)=> { if(SearchTerm == "") { return val}
      else if  ( val.first_name.toLowerCase().includes(SearchTerm.toLowerCase()) ){ return val  }}).map((val , key ) => {
          return   <ul className="list-group " key={key}>
                    <li className="list-group-item">{val.first_name}</li>
  
</ul>
        })}
    
    </>
  )
}

export default Test