import React from 'react'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Books from '../components/Books'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Slider />
        <h3 style={{margin:"20px"}}>Categories.</h3>
        <Categories />
        <h3 style={{margin:"20px"}}>Our Top Collections.</h3>
        <Books />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home