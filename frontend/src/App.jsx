import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AddProduct from './Pages/AddProduct'
import Barcode from './Pages/Barcode'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path={`/barcode/:_id`}  element={<Barcode/>}/>
      </Routes>
    </>
  )
}

export default App
