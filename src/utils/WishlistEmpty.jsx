import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import './WishlistEmpty.css'
import wishlist from '../assets/wishlist.png'

export const WishlistEmpty = () => {
  return (
    <div>
    
      <div id="mountRoot">
        <div data-reactroot="">
          <div>
            <div>
              <div className="wishlistEmpty-container">
                <div className="wishlistEmpty-heading">YOUR WISHLIST IS EMPTY</div>
                <div className="wishlistEmpty-info">Add items that you like to your wishlist. Review them anytime and easily move them to the bag.</div>
                <div className="myntraweb-sprite wishlistEmpty-icon sprites-emptyIcon">
                  <img src={wishlist} alt="img" />
                </div>
                  <div>
                    <Link to="/" className="wishlistEmpty-button">CONTINUE SHOPPING</Link>
                  </div>
                </div>
              </div>
            </div>
          <div>
            <div className="application-base"></div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
