import React from 'react'
import './Bag.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { addcartitem, removecartitem } from '../../store/cartSlice'
import { useSelector, useDispatch } from "react-redux";

const Bag = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [price, setPrice] = useState(0);
  const [discprice, setDiscPrice] = useState(0);

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

    const discount = () => {
      let disc = 0;
      products.map((products, index) => {
        disc = (1000 - products.price) + disc
      })
      setDiscPrice(disc)
    }

    useEffect(()=>{
        total()
        discount()
    },[total])

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

      { products.length > 0 ? <div>
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
          <div>
            {
              products.map((products, index) => {
              return (
                  <div className='shippingtip mt-3' key={products.id}>
                    <div id='descriptionDiv'>
                    <i className="bi bi-x-circle itemremove" onClick={() => cartRemover(products.id)}></i>
                      <div>
                        <img src={products.images} alt="" />
                      </div>
                      <div className='branding'>
                        <div className="brandname">{products.category.name}</div>
                        <div className='title'>{products.title}</div>
                        <div className='title2'>Sold by: U.S. Polo Assn. Pvt. Ltd.</div>
                        <div id="selectDiv">
                          <select name="size" id="size">
                            <option value="S">SIZE: S</option>
                            <option value="M">SIZE: M</option>
                            <option value="L">SIZE: L</option>
                            <option value="Xl">SIZE: XL</option>
                            <option value="XXl">SIZE: XXL</option>
                          </select>
                          <select name="quantity" id="quantity">
                            <option value="1">Qty: 1</option>
                            <option value="2">Qty: 2</option>
                            <option value="3">Qty: 3</option>
                            <option value="4">Qty: 4</option>
                            <option value="5">Qty: 5</option>
                            <option value="6">Qty: 6</option>
                            <option value="7">Qty: 7</option>
                            <option value="8">Qty: 8</option>
                            <option value="9">Qty: 9</option>
                            <option value="10">Qty: 10</option>
                          </select>
                        </div>
                        <div className="price">
                          <span>₹{products.price}</span> <del className="line-through">₹1000</del> <span className="discount span1">{(100-((products.price * 100 )/1000)).toFixed(2)}% OFF</span>
                        </div>
                        <div className='return'>
                          <div><i className="bi bi-arrow-clockwise"></i></div>
                          <div className='returntitle'><span className='span3'> 14 days </span> return available </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
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
                  <button className='btn' onClick={handleShow}>Apply</button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title className='modalcupon'>APPLY COUPON</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='mainbody'>
                      <Form className='mainform'>
                        <Form.Group className="mb-3 formgp" controlId="exampleForm.ControlInput1">
                          <div className='formgp2'>
                            <Form.Control
                              type="email"
                              placeholder="Enter coupon code"
                              autoFocus
                              className='formctrl'
                            />
                            <div className='check'>CHECK</div>
                          </div>
                        </Form.Group>
                      </Form>
                      <div className='mainoffer'>
                        <div>
                            <div className='offercheck'>
                              <input type="checkbox" className='checkbox'/>
                              <span>BONANZANEW</span>
                            </div>
                            <div className='offerpara'>
                              <div className='offerpara1'>Save <span>₹333</span></div>
                              <div className='offerparacombo'>
                                <div>Rs. 333 off on minimum purchase of 1499.</div>
                                <div>Expires on: 30th July 2023 | 11:59 AM</div>
                              </div>
                            </div>
                        </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer className='modalfooter'>
                      <Button  onClick={handleClose} className='modalbtn1'>
                        <div className='modalmax'>Maximum savings:</div>
                        <div className='modalvalue'>₹399</div>
                      </Button>
                      <Button onClick={handleClose} className='modalbtn2'>
                        APPLY
                      </Button>
                    </Modal.Footer>
                  </Modal>
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
                  <div className='pricedetails'>PRICE DETAILS ({products.length} item)</div>
                  <div className='priceblock'>
                    <div className='priceflex'>
                      <div>Total MRP</div>
                      <div>₹{price}</div>
                    </div>
                    <div className='priceflex'>
                      <div>Discount on MRP</div>
                      <div className='discnt'>– ₹{discprice}</div>
                    </div>
                    <div className='priceflex'>
                      <div>Coupon Discount</div>
                      <div className='cpdiscount' onClick={handleShow}>Apply Coupon</div>
                    </div>
                    <div className='priceflex'>
                      <div>Convenience Fee <span>Know More</span></div>
                      <div className='cfee'>{price > 499 ? `Free` : `₹40`}</div>
                    </div>
                    <hr />
                    <div className='priceflex'>
                      <div className='totalamount'>Total Amount</div>
                      {
                       products.length > 0 ? <div className='totalamount'>₹{price > 499 ? price : (price + 40)}</div> : <div className='totalamount'>₹{price}</div>
                      }
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

      </div> : <div>Continue shopping...</div> } 
    </div>
  )
}

export default Bag