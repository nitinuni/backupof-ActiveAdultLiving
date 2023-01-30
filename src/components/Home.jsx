import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Howitworks from './Howitworks'
import Maptabs from  './Maptabs'
import ImageSection from './ImageSection'
import FeaturedCommunities from './FeaturedCommunities'
import Categories from './Categories'
import BlogPost from './BlogPosts'
import WhatsNext from './WhatsNext'
import Footer from './Footer'



function Home() {
  return (
    <div>
   <Navbar title="TextUtils"  />
    <Slider/>
    <Howitworks />
     <Maptabs /> 
    <ImageSection/>
    <FeaturedCommunities/>
    <Categories  />
    <BlogPost  />
    <WhatsNext/>
    <Footer />
    </div>
  )
}

export default Home