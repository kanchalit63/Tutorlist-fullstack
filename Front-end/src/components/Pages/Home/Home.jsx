import React from 'react'
import Hero from './Content/Hero/Hero'
import Contentone from './Content/Content-one'
import Contenttwo from './Content/content-two'
import Contentthree from './Content/content-three'
import Contentfour from './Content/Content-four'
import Contentfive from './Content/Content-five'
import Footer from '../../Footer/Footer'

function Home() {
  return (
    <>
    <Hero />
    <Contentone />
    <Contenttwo/>
    <Contentthree/>
    <Contentfour />
    <Contentfive />
    <Footer />
    </>
  )
}

export default Home