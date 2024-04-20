import React from 'react'
import Layout from '../../components/layout/Layout'
import Herosection from '../../components/hero-section/Hero'
import StoryCards from '../../components/story-cards/StoryCards'

const Home = () => {
  return (
    <Layout>
      {/* <HeroSection /> */}
      {/* <Service /> */}
      <div className='bg-indigo-900'>
      <Herosection />
      <StoryCards />
      </div>
    </Layout>
  )
}

export default Home