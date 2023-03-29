import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import {Cart} from './Pages/Cart/Cart'
import Furniture from './Pages/Category/Furniture/Furniture'
import Shoes from './Pages/Category/Shoes/Shoes'
import Tshirt from './Pages/Category/Tshirt/Tshirt'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Product from './Pages/Product/Product'
import { WishList } from './Pages/WishList/WishList'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/shoes' element={<Shoes/>}/>
        <Route path='/tshirt' element={<Tshirt/>}/>
        <Route path='/furniture' element={<Furniture/>}/>
        <Route path='/wishlist' element={<WishList/>} />
        <Route path='/bag' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App
