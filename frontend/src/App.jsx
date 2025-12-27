import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Order from './pages/Order'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Navbar from './components/Navbar'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Product from './pages/Product'
import Footer from './components/Footer'



const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/collection' element={<Collection/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/order' element={<Order/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/place-order' element={<PlaceOrder/> }></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/product/:productId' element={<Product/> }></Route>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App