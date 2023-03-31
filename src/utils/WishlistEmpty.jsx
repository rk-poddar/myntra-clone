import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import './WishlistEmpty.css'

export const WishlistEmpty = () => {
  return (
    <div>
    
      <div id="mountRoot">
        <div data-reactroot="">
          <div>
            <div>
              <div class="wishlistEmpty-container">
                <div class="wishlistEmpty-heading">YOUR WISHLIST IS EMPTY</div>
                <div class="wishlistEmpty-info">Add items that you like to your wishlist. Review them anytime and easily move them to the bag.</div>
                <div class="myntraweb-sprite wishlistEmpty-icon sprites-emptyIcon">
                  <img src="https://img.icons8.com/color/256/shopaholic.png" alt="img" />
                </div>
                  <div>
                    <Link to="/" class="wishlistEmpty-button">CONTINUE SHOPPING</Link>
                  </div>
                </div>
              </div>
            </div>
          <div>
            <div class="application-base"></div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
