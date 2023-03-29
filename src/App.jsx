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
        <Route exact path='/product' element={<Product/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/shoes' element={<Shoes/>}/>
        <Route exact path='/tshirt' element={<Tshirt/>}/>
        <Route exact path='/furniture' element={<Furniture/>}/>
        <Route exact path='/wishlist' element={<WishList/>} />
        <Route exact path='/bag' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App
