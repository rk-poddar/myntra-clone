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
      {/* <Navbar/> */}
      <Routes>
        <Route  path='/' exact element={<Home/>}/>
        <Route  path='/product' exact element={<Product/>}/>
        <Route  path='/login' exact element={<Login/>}/>
        <Route  path='/shoes' exact element={<Shoes/>}/>
        <Route  path='/tshirt' exact element={<Tshirt/>}/>
        <Route  path='/furniture' exact element={<Furniture/>}/>
        <Route  path='/wishlist' exact element={<WishList/>} />
        <Route  path='/bag' exact element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App
