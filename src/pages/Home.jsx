import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Recipes from '../components/Recipes'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main className='flex flex-col w-full'>
        <Navbar/>
        <Header title={
            <p>Good Food Good Life</p>
        } 
        type={"home"}
        />
        <section id='recipes' className='md:max-w-[1440px] mx-auto
        '>
          <Recipes/>
        </section>
        <Footer/>
    </main>
  )
}

export default Home
