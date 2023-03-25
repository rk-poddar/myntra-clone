import React from 'react'
import "./Product.css"
import Tshirt from '../Category/Tshirt/Tshirt';
import Footer from '../../components/Footer/Footer';
import Shoes from '../Category/Shoes/Shoes';
import {useDispatch, useSelector} from "react-redux";
import { fetchProducts } from '../../store/productSlice';
import { useEffect } from 'react'
import { STATUS } from '../../store/productSlice';

const Product = () => {
  const dispatch = useDispatch();
    const {data: products, status} = useSelector((state)=>state.product)
    useEffect(() => {
        dispatch(fetchProducts())
        
    },[])

    // check the status 
    if(status === STATUS.LOADING){
      return (
        <div id="ProductsContainer">
          <div id="ProductsParent">
          <div className='card'>
            <h2>Loading....</h2>
            </div>
          </div>
        </div>
      )
    };

    if(status === STATUS.ERROR){
        return (
          <div id="ProductsContainer">
            <div id="ProductsParent">
            <div className='card'>
              <h2>Something went wrong...</h2>
              </div>
            </div>
          </div>
        )
    };
    
  return (
    <div>
        <div id="ProductsContainer">
      <div id="ProductsParent">
        <div>Home / ClothingMen / <span> T-Shirts</span></div>
        <div>Men T-Shirts <span>- 100 items</span></div>
        <div id="filterSelectBoxes">
          <div className="fl">FILTERS</div>
          <div className="bundel">
            <select>
              <option value="">Bundles</option>
              <option value="">Single Styles</option>
            </select>
          </div>
          <div className="country">
            <select>
              <option value="">Country Of Origin</option>
              <option value="">All Countries</option>
              <option value="">India</option>
              <option value="">U.S</option>
            </select>
          </div>
          <div className="size">
            <select>
              <option value="">Size</option>
              <option value="">Small</option>
              <option value="">Medium</option>
              <option value="">Large</option>
            </select>
          </div>
          <div className="ProductSelectBy">
            <select name="sort" id="sortButton">
              <option value="">Sort by : Recommended</option>
              <option value="whatsNew">Whats New</option>
              <option value="popularity">Popularity</option>
              <option value="discount">Better Discount</option>
              <option value="desc">Price : High to Low</option>
              <option value="asc">Price : Low to High</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>
        </div>

        <div id="ProductBlock">
          <div id="ProductFilter">
            <div id="brandFilter">
              <br /><br />
              <span className="filterspan">CATEGORY</span>
              <ul id="filterButtonBrand">
                <li> 
                  <input 
                    type="checkbox" 
                    id="174-1881" 
                    value="174-1881" 
                    name="174-1881"
                  /><span>Tshirts</span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="1881-3588"
                    value="1881-3588"
                    name="1881-3588"
                  /><span>Lounge Tshirts</span>
                </li>
                
              </ul>

              <span className="filterspan">BRAND</span>
              <ul id="filterButtonBrand">
                <li>
                  <input
                    type="checkbox"
                    className="bandfiltered"
                    id="Roadster"
                    value="Roadster"
                    name="Roadster"
                  />
                  <span>Roadster</span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="bandfiltered"
                    id="WROGN"
                    value="WROGN"
                    name="WROGN"
                  />
                  <span> WROGN </span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="bandfiltered"
                    id="HRX"
                    value="HRX by Hrithik Roshan"
                    name="HRX by Hrithik Roshan"
                  />
                  <span> HRX by Hrithik Roshan </span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="bandfiltered"
                    id="LouisPhilippeSport"
                    value="Louis Philippe Sport"
                    name="Louis Philippe Sport"
                  />
                  <span> Louis Philippe Sport </span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="bandfiltered"
                    id="Puma"
                    value="Puma"
                    name="Puma"
                  />
                  <span> Puma </span>
                </li>
              </ul>
              <br />

              <span className="filterspan">PRICE</span>
              <ul id="filterButtonPrice">
                <li> <input type="checkbox" id="174-1881" value="174-1881" name="174-1881"/><span> Rs. 174 to Rs. 1881 </span></li>
                <li>
                  <input
                    type="checkbox"
                    id="1881-3588"
                    value="1881-3588"
                    name="1881-3588"
                  /><span> Rs. 1881 to Rs. 3588 </span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="3588-5295"
                    value="3588-5295"
                    name="3588-5295"
                  /><span> Rs. 3588 to Rs. 5295 </span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="5295-7002"
                    value="5295-7002"
                    name="5295-7002"
                  />
                  <span> Rs. 5295 to Rs. 7002 </span>
                </li>
              </ul>
              <br/>
              <span className="filterspan">DISCOUNT RANGE</span>
              <ul id="filterButtonDiscount">
                <li>
                  <input
                    type="radio"
                    id="10"
                    value="10"
                    name="10"
                  /><span> 10% and above </span>
                </li>
                <li>
                  <input
                  type="radio"
                  id="20"
                  value="20"
                  name="20"
                  /><span> 20% and above </span>
                </li>
                <li>
                  <input
                  type="radio"
                  id="30"
                  value="30"
                  name="30"/>
                  <span> 30% and above </span>
                </li>
                <li>
                  <input
                  type="radio"
                  id="40"
                  value="40"
                  name="40"/>
                  <span> 40% and above </span>
                </li>
                <li>
                  <input
                  type="radio"
                  id="50"
                  value="50"
                  name="50"/>
                  <span> 50% and above </span>
                </li>
                <li>
                  <input
                  type="radio"
                  id="60"
                  value="60"
                  name="60"/>
                  <span> 60% and above </span>
                </li>
                <li>
                  <input
                  type="radio"
                  id="70"
                  value="70"
                  name="70"/>
                  <span> 70% and above </span>
                </li>
                <li>
                  <input
                  type="radio"
                  id="80"
                  value="80"
                  name="80"/>
                  <span> 80% and above </span>
                </li>
                <li>
                  <input
                  type="radio"
                  id="90"
                  value="90"
                  name="90"/>
                  <span> 90% and above </span>
                </li>
              </ul>
            </div>
          </div>
          <br /><br />

          <div id="productGrid">
            <div id="productGridItems">
            {products.slice(0, 100).map((products, index) => (
                      <div className='card' key={products.id}>
                      <div >
                        <a href=""
                          ><img
                            src={products.images}
                            alt=""
                        /></a>
                        </div>
                        <h6 className='text-center'>{products.category.name}</h6>
                      </div>
                  ))
              }
            </div>
        </div>
          
          {/* <Tshirt/> */}
          {/* <Shoes/> */}
          
        </div>
        <hr />
        <Footer/>
        <div id="footerBlock"></div>
      </div>
    </div>
    </div>
  )
}

export default Product