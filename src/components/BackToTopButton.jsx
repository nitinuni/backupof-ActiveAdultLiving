import React from 'react'
import { useEffect , useState } from 'react'


function BackToTopButton() {
    const [BackToTopButton , setBackTopButton] = useState(false);
    useEffect(() =>  {  window.addEventListener('scroll', () => { 
        if(window.scrollY > 100 ) {  
            setBackTopButton(true)  } else 
            {  setBackTopButton(false) }   }            )  } ,[] )

const scrollUp = (  )  =>  {
    window.scrollTo({top:0 ,
    behavior:'smooth'    })
}
return <div className='App'>
      { BackToTopButton && (<button style={{ position:"fixed" ,bottom:"50px",right:"50px",height:"50px",width:'50px', fontSize:"50px",borderRadius:'50%',background:"var(--primary_color)"   }}  onClick={scrollUp}  ><i className="fa-sharp fa-solid fa-up"></i></button>)}

</div>



}

export default BackToTopButton