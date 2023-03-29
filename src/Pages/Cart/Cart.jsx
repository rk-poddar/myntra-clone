import React from 'react'
import './Cart.css'
import { useSelector, useDispatch } from "react-redux";
import Footer from '../../components/Footer/Footer';
import { addcartitem, removecartitem } from '../../store/cartSlice'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart);
    console.log(products)

    const cartRemover = (productId) => {
        dispatch(removecartitem(productId));
        toast.success('Item remove successfully', {
          autoClose: 2000,
          position: "bottom-right"
        })
    };

    const cartAdd = () => {
        
    }

  return (
    <div>
        <div id="wishlistparent">
            <div id="wishlistCount">My Cart <span>{products.length} items</span> </div>
            <div id='dcData'></div>
            <div id="WishListContainer">
                {
                products.length > 0 ? products.map((products) => (
                    <div className='cartCard' key={products.id}>
                        <img src={products.images} alt="" />
                        <h6 className='title'>{products.category.name}</h6>
                        <button onClick={() => cartAdd(products)} className='btn' id='moveToBag'>By Now</button>
                        <button onClick={() => cartRemover(products.id)} className='btn' id='moveToBag'>Remove</button>
                    </div>
                )) : <div>Continue Shopping..</div>
                }
            </div>
            <div id="footerEl">
                <Footer/>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}
