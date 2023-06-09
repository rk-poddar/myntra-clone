import React from 'react'
import './WishList.css'
import { useSelector, useDispatch } from "react-redux";
import Footer from '../../components/Footer/Footer';
import {removeitem } from '../../store/wishlistSlice'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addcartitem } from '../../store/cartSlice';
import { Navbar } from '../../components/Navbar/Navbar';
import {WishlistEmpty} from '../../utils/WishlistEmpty'

export const WishList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.wishlist);

    const cartRemover = (productId) => {
        dispatch(removeitem(productId));
        toast.success('Item remove successfully', {
          autoClose: 2000,
          position: "bottom-right"
        })
    };

    const cartAdd = (products) => {
        dispatch(addcartitem(products))
        dispatch(removeitem(products.id));
        toast.success('Item added to cart', {
            autoClose: 2000,
            position: "bottom-right"
        })
    }

  return (
    <div>
        <Navbar/>
        {products.length >0 ? <div>
        <div id="wishlistparent">
            <div id="wishlistCount">My Wishlist <span>{products.length} items</span> </div>
            <div id='dcData'></div>
            <div id="WishListContainer">
                {
                products.map((products) => (
                    <div className='cartCard' key={products.id}>
                        <img src={products.images} alt="" />
                        <h6 className='title'>{products.category.name}</h6>
                        <h6 className='title'>₹{products.price}</h6>
                        <button onClick={() => cartAdd(products)} className='btn' id='moveToBag'>Move To Bag</button>
                        <button onClick={() => cartRemover(products.id)} className='btn' id='moveToBag'>Remove</button>
                    </div>
                ))
                }
            </div>
            <div id="footerEl">
                <Footer/>
            </div>
        </div>
        </div> : <WishlistEmpty/>
        }
        <ToastContainer />
    </div>
  )
}
