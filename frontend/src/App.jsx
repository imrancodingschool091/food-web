import React from 'react'
import { Routes, Route, } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Special from './components/Special'
import Gallery from './components/Gallery'
import Login from './components/Login'
import Sign from './components/Sign'
import Event from './components/Event'
import Chefs from './components/Chefs'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Table from './components/Table'
import Book from './components/Book'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/special' element={<Special />} />
        <Route path='/event' element={<Event />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/chef' element={<Chefs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/book' element={<Book />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />

        <Route path='/login' element={<Login />} />
        <Route path='/sign' element={<Sign />} />
        <Route path='/table' element={<Table />} />
      </Routes>

      <Footer />

      <ToastContainer />



    </>
  )
}

export default App
