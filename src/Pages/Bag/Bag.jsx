import React from 'react'
import './Bag.css'
import { Link } from "react-router-dom";

const Bag = () => {

  // offer section show or hide
  function showMore() {
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("showMoreOffer");

      if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = `Show more <i className="bi bi-chevron-down"></i>`;
          moreText.style.display = "none";
      } else {
          dots.style.display = "none";
          btnText.innerHTML = `Show less <i className="bi bi-chevron-up"></i>`;
          moreText.style.display = "inline";
      }
  }

  return (
    <div>
      <div className="header headers">
        <div className="logo">
          <Link to='/'>
            <img
              src="https://cdn.freelogovectors.net/wp-content/uploads/2021/02/myntra-logo-freelogovectors.net_.png"
              alt="Myntra"
              height="32px"
              width="40px"
            />
          </Link>
        </div>
        <nav className='nav d-none d-sm-block'>
          <ul>
            <li>
              <a id="current_step-1"> BAG </a>
            </li>
            <li> ---------- </li>
            <li><a id="current_step-2"> ADDRESS </a></li>
            <li> ---------- </li>
            <li>
              <a id="current_step-3"> PAYMENT </a>
            </li>
          </ul>
        </nav>
        <div className="secure-logo">
          <img
            src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
            alt="sprite-secure"
            height="30px"
            width="28px"
          />
          <p>100% SECURE</p>
        </div>
      </div>
      <hr className="hr5" />

      <div className="row container" id='cartContainer'>
        <div className="col-md-7 col-12">
          <div className='delivery'>
            <div className='delivery_title'>Deliver to: <span>847233</span> </div>
            <button className='btn'>CHANGE ADDRESS</button>
          </div>
          
          <div className='offers mt-3'>
            <div className='offers_Img_title'>
              <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKgAWECXD-dGwIJDs8PmoO65IAVSAHqqGi3Q&usqp=CAU"
              alt="sprite-secure"
              height="22px"
              width="22px"
              />
              <p>Available Offers</p>
            </div>
            <div className='avail_offer'>
              <ul>
                <li> 5% Unlimited Cashback on Flipkart Axis Bank Ctedit Card TCA</li> <span id="dots"></span><span id="more">
                <li>10% Cashback upto R 100 on Paytm Postpaid transaction on a min spend of Rs 1000 , TCA
                </li>
                <li>10% Cashback upto R 200 on Ola Money Postpaid or wallet transaction on a min spend of Rs 100 TCA</li>
                <li>10% Cashback up to R 750 on Dhani One Freedom Card on a min spend of Rs 1,200. TCA</li>
                <li>10% Cashback Upto R$ 150 on Mobikwik wallet transaction of min Rs 1500 TCA
                </li>
                <li>5% Cashback upto R$ 150 and 3X Reward points on a minimum spend of Rs 1,500 with PayZapp.TCA
                </li>
                <li>Flat Rs 200 Cashback on first Airtel Payments Bank transaction on Myntra on a min spend of Rs 2,000. TCA
                </li></span>
              </ul>
              <button id="showMoreOffer" onClick={showMore}>Show more <i className="bi bi-chevron-down"></i></button>
            </div>
          </div>

          <div>
            <div className='shippingtip mt-3'>
              <div className='tipimg'>
                <img src="https://constant.myntassets.com/checkout/assets/img/ship-free.webp" alt="" width="45px" />
              </div>
              <div className='msg'>Yay! <span> No convenience fee </span> on this order.</div>
            </div>
          </div>
          
          <div id='descriptionDiv'>
            <dir className='text-center my-3'>Products Section</dir>
          </div>
          
          <div>
            <div className='shippingtip mt-3 wishflex'>
              <div className='tipimg wishflex'>
                <i className="bi bi-bookmark"></i>
                <Link to="/wishlist"><div className='wishmsg'> Add More From Wishlist</div></Link>
              </div>
              <Link to="/wishlist"><i className="bi bi-chevron-right"></i></Link>
            </div>
          </div>

        </div>

        <div className="col-md-4 col-12">
          <div>
            <div>
              <div>
                <div className='couponstitle'>COUPONS</div>
                <div className='coupons'>
                  <div className='coupons_2nd'>
                    <i className="bi bi-tag"></i>
                    <div className='applycoupons'>Apply Coupons</div>
                  </div>
                  <button className='btn'>Apply</button>
                </div>
                <hr />

                <p className='Gname'>GIFITNG AND PERSONALIZAION</p>
                <div className="gifting">
                  <div className='gimg'><img src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp" alt="" /></div>
                  <div>
                      <p>Buying for a loved one?</p>
                      <p>Gift wrap and personalised message on card <br/> Only 25 RS.</p>
                      <button  id="applyNowG" className='button'>Add Gift Wrap</button>
                  </div>
                </div>
                <hr />

                <div>
                  <div className='pricedetails'>PRICE DETAILS (1 item)</div>
                  <div className='priceblock'>
                    <div className='priceflex'>
                      <div>Total MRP</div>
                      <div>₹1090</div>
                    </div>
                    <div className='priceflex'>
                      <div>Discount on MRP</div>
                      <div className='discnt'>- ₹100</div>
                    </div>
                    <div className='priceflex'>
                      <div>Coupon Discount</div>
                      <div className='cpdiscount'>Apply Coupon</div>
                    </div>
                    <div className='priceflex'>
                      <div>Convenience Fee <span>Know More</span></div>
                      <div className='cfee'>Free</div>
                    </div>
                    <hr />
                    <div className='priceflex'>
                      <div className='totalamount'>Total Amount</div>
                      <div className='totalamount'>₹2000</div>
                    </div>
                  </div>
                </div>

                <div className='pricebtn'>
                  <button className='btn'>PLACE ORDER</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bag