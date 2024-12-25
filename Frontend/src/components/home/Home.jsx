import React from 'react'
import Navbar from '../Navbar'
import Banner from '../Banner'
import Footer from '../Footer'
import ExploreRest from '../ExploreRest'
import Hero from '../Hero'
import Trending from '../Trending'
import Review from '../Review'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Hero />
      <Trending />
      <ExploreRest />
      <Review />
      <Footer />
    </div>
  )
}

export default Home
