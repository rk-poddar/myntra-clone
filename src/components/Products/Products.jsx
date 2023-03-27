import React, {useEffect} from 'react'
import "./Products.css"
import {useDispatch, useSelector} from "react-redux";
import { fetchProducts } from '../../store/productSlice';

const Products = () => {
  const dispatch = useDispatch();
  const {data: products} = useSelector((state)=>state.product)

    useEffect(() => {
      dispatch(fetchProducts())
      localStorage.setItem('items', JSON.stringify(products));
  },[products])

  return (
    <>
      <div>
        <div className="text-banner-container">
          <h4 className="text-banner-title">DEALS OF THE DAY</h4>
        </div>
          <div className="img-link-container-1"> 

              {products.slice(0, 8).map((products, index) => (
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

      <div>
        <div className="text-banner-container">
          <h4 className="text-banner-title">BEST OF MYNTRA EXCLUSIVE BRANDS</h4>
        </div>
          <div className="img-link-container-2"> 

              {products.slice(8, 24).map((products, index) => (
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

      <div>
        <div className="text-banner-container">
          <h4 className="text-banner-title">CATEGORIES TO BAG</h4>
        </div>
          <div className="img-link-container-3"> 

              {products.slice(24, 48).map((products, index) => (
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
    </>
  )
}

export default Products