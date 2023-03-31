import React from 'react'
import './BagEmpty.css'
import '../assets/cart.png'
import { Link } from "react-router-dom";

const BagEmpty = () => {
  return (
    <div>
        <div className='emptycart'>
            <img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" alt="img" />
            <h3>Hey, it feels so light !</h3>
            <p>There is nothing in your bag. Let's add some items.</p>
            <Link to="/wishlist">
                <button>ADD ITEMS FROM WISHLIST</button>
            </Link>
        </div>
        <div className="checkout-footer"> 
            <div className="content">
                <div className="images"> 
                    <img className="footer-bank-ssl" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png" width="70" height="37" /> 
                    <img className="footer-bank-visa" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png" width="60" height="37" /> 
                    <img className="footer-bank-mc" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png" width="60" height="37" /> 
                    <img className="footer-bank-ae" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png" width="60" height="37" /> 
                    <img className="footer-bank-dc" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png" width="60" height="37" /> 
                    <img className="footer-bank-nb" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png" width="60" height="37" /> 
                    <img className="footer-bank-cod" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png" width="60" height="37" /> 
                    <img className="footer-bank-rupay" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png" width="60" height="37" /> 
                    <img className="footer-bank-paypal" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png" width="60" height="37" /> 
                    <img className="footer-bank-bhim" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png" width="60" height="37" /> 
                    </div> 
                    <Link to="/contactus" className="contact-us"> 
                        <span>Need Help ? Contact Us</span> 
                    </Link> 
                </div>
            </div>
        </div>
    )
}

export default BagEmpty