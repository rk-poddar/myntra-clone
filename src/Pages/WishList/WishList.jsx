import React from 'react'
import './WishList.css'
import { useSelector, useDispatch } from "react-redux";
import Footer from '../../components/Footer/Footer';
import { removeitem } from '../../store/wishlistSlice'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const cartAdd = () => {
        
    }

  return (
    <div>
        <div id="wishlistparent">
            <div id="wishlistCount">My Wishlist <span>{products.length} items</span> </div>
            <div id="WishListContainer">
                {
                products.map((products) => (
                    <div className='cartCard' key={products.id}>
                        <img src={products.images} alt="" />
                        <h6 className='title'>{products.category.name}</h6>
                        <button onClick={() => cartAdd(products.id)} className='btn' id='moveToBag'>Move To Bag</button>
                        <button onClick={() => cartRemover(products.id)} className='btn' id='moveToBag'>Remove</button>
                    </div>
                ))
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
