import React, { useEffect, useState } from 'react'
import './Cart.css'
import { useSelector, useDispatch } from "react-redux";
import Footer from '../../components/Footer/Footer';
import { addcartitem, removecartitem } from '../../store/cartSlice'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from '../../components/Navbar/Navbar';

export const Cart = () => {

    const [price, setPrice] = useState(0);

    const dispatch = useDispatch();
    const products = useSelector(state => state.cart);
    const cartRemover = (productId) => {
        dispatch(removecartitem(productId));
        toast.success('Item remove successfully', {
          autoClose: 2000,
          position: "bottom-right"
        })
    };

    const total = () => {
        let price = 0;
        products.map((product, index) => {
            price = product.price + price
        })
        setPrice(price)
    }

    useEffect(()=>{
        total()
    },[total])

  return (
    <div>
        <Navbar/>
        <div id="wishlistparents">
            <div id="wishlistCounts">My Cart <span>{products.length} items</span> </div>
            <div className='row'>
                <div className='col-9'>
                    <div id="WishListContainers">
                        {
                        products.length > 0 ? products.map((products) => (
                            <div className='cartCards' key={products.id}>
                                <img src={products.images} alt="" />
                                <h6 className='title'>{products.category.name}</h6>
                                <h6 className='title'>₹{products.price}</h6>
                                <button onClick={() => cartRemover(products.id)} className='btn' id='moveToBags'>Remove</button>
                            </div>
                        )) : <div>Continue Shopping...</div>
                        }
                    </div>
                </div>
                {products.length > 0 ?
                <div className='col-3'>
                    <div className='titem'>
                        <h5>PRICE DETAILS</h5>
                        <hr />
                        <div className='main_tbitem'>
                            <div className='tbitem'>
                                <div>Price ({products.length} item)</div>
                                <div>₹{price}</div>
                            </div>
                            <div className='tbitem'>
                                <div>Discount</div>
                                <div><span>– ₹{price > 1000 ? 100 : 0}</span></div>
                            </div>
                            <div className='tbitem'>
                                <div>Delivery Charge</div>
                                <div><span>{price > 499 ? `Free` : `₹40`}</span></div>
                            </div>
                            <hr />
                            <div className='tbitem total'>
                                <div>Total Amount</div>
                                <div>₹{price > 1000 ? (price-100) : price + (price > 499 ? 0 : 40)}</div>
                            </div>
                            <hr />
                            {
                                price > 1000 ? <div className='tbitem total'>
                                    <div><span>You will save {price > 1000 ? `₹100` : `₹0`} on this order</span></div>
                                </div> : <div></div>
                            }
                        </div>
                        <button className='btn placebtn'>PLACE ORDER</button>
                    </div>
                </div> : <div></div>
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
