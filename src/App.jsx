import React from 'react'
import Home from './pages/Home'
import {Routes, Route, Outlet} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RecipeDetails from './pages/RecipeDetails';
import Signin from './components/Signin';



function Layout(){
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const App = () => {
  return (
    <div className='bg-black'>
       <Routes>
          <Route path="/" element={<Layout/>}/>
          <Route index element={<Home/>}/>         
          <Route path='/signin' element={<Signin/>}/>
          <Route path="recipes/:id" element={<RecipeDetails/>}/>


       </Routes>
    </div>
  )
}

export default App
