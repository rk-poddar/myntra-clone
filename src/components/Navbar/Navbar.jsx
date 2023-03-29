import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";
import { useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import { filterSP } from '../../store/productSlice';

export const Navbar = () => {

    const dispatch = useDispatch()
    // search folter
    const {data: products} = useSelector((state)=>state.product)
    const [filterValue, setFilterValue] = useState(products)

    const productwishlist = useSelector(state => state.wishlist);
    const productcart = useSelector(state => state.cart)

    const handleFilter = (e) => {
        if(e.target.value == " "){
            return products
        }else{
            const res = dispatch(filterSP(e.target.value.toLowerCase()))
            console.log(res)
        }
        setFilterValue(e.target.value)
    }

    return (
        <header className="header">
            <Link to="/" className="logo"><img src="https://cdn.freelogovectors.net/wp-content/uploads/2021/02/myntra-logo-freelogovectors.net_.png" alt="" /></Link>
            <nav>
                <ul className="menu-items">
                    <li>
                        <a href="#" className="menu-item-1">MEN</a>
                        <div className="mega-menu">
                            <div className="content">
                                <div className="col">
                                    <section>
                                        <h2 className="item-1-heading">Topwear</h2>
                                        <ul className="mega-links">
                                            <li><Link to="/tshirt">T-Shirts</Link></li>
                                            <li><a href="#">Casual Shirts</a></li>
                                            <li><a href="#">Formal Shirts</a></li>
                                            <li><a href="#">SweatShirts</a></li>
                                            <li><a href="#">Sweaters</a></li>
                                            <li><a href="#">Jackets</a></li>
                                            <li><a href="#">Blazers & Coats</a></li>
                                            <li><a href="#">Suits</a></li>
                                            <li><a href="#">Rain Jackets</a></li>
                                        </ul>
                                        <hr />
                                        <h2 className="item-1-heading">Indian & Festive Wear</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Kurtas & Kurta Sets</a></li>
                                            <li><a href="#">Sherwanis</a></li>
                                            <li><a href="#">Nehru Jackets</a></li>
                                            <li><a href="#">SweatShirts</a></li>
                                            <li><a href="#">Dhotis</a></li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <h2 className="item-1-heading">Bottomwear</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Jeans</a></li>
                                            <li><a href="#">Casual Trousers</a></li>
                                            <li><a href="#">Formal Trousers</a></li>
                                            <li><a href="#">Shorts</a></li>
                                            <li><a href="#">Track pants & Joggers</a></li>
                                        </ul>
                                        <hr />
                                        <h2 className="item-1-heading">Innerwear & Sleepwear</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Briefs & Trunks</a></li>
                                            <li><a href="#">Boxers</a></li>
                                            <li><a href="#">Vests</a></li>
                                            <li><a href="#">Sleepwear & Loungewear</a></li>
                                            <li><a href="#">Thermals</a></li>
                                        </ul>
                                        <hr />
                                        <h2 className="item-1-heading">Plus Size</h2>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <h2 className="item-1-heading">Footwear</h2>
                                        <ul className="mega-links">
                                            <li><Link to="/shoes">Casual Shoes</Link></li>
                                            <li><a href="#"> Sports Shoes</a></li>
                                            <li><a href="#">Formal Shoes</a></li>
                                            <li><a href="#">Sneakers</a></li>
                                            <li><a href="#">Sandals & Floaters</a></li>
                                            <li><a href="#">Flip Flops</a></li>
                                            <li><a href="#">Socks</a></li>
                                        </ul>
                                        <hr />
                                        <h2 className="item-1-heading">Personal Care & Grooming</h2>
                                        <h2 className="item-1-heading">Sunglasses & Frames</h2>
                                        <h2 className="item-1-heading">Watches</h2>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <h2 className="item-1-heading">Sports & Active Wear</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Sports Shoes</a></li>
                                            <li><a href="#">Sports Sandals</a></li>
                                            <li><a href="#">Active T-Shirts</a></li>
                                            <li><a href="#">Tracksuits</a></li>
                                            <li><a href="#">Jackets & Sweatshirts</a></li>
                                            <li><a href="#">Sports Accessories</a></li>
                                            <li><a href="#">Swimwear</a></li>
                                        </ul>
                                        <hr />
                                        <h2 className="item-1-heading">Gadgets</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Smart Wearables</a></li>
                                            <li><a href="#">Fitness Gadgets</a></li>
                                            <li><a href="#">Headphones</a></li>
                                            <li><a href="#">Speakers</a></li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#" className="menu-item-2">WOMEN</a>
                        <div className="mega-menu">
                            <div className="content">
                                <div className="col">
                                    <section>
                                        <h2 className="item-2-heading">Indian & Fusion Wear</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Kurtas & Suits</a></li>
                                            <li><a href="#">Kurtis,Tunics & Tops</a></li>
                                            <li><a href="#">Ethinc Wear</a></li>
                                            <li><a href="#">Leggings,Salwars & Churidars</a></li>
                                            <li><a href="#">Skirts & Palazzos</a></li>
                                            <li><a href="#">Sarees</a></li>
                                            <li><a href="#">Dress Materials</a></li>
                                            <li><a href="#">Lehenga Cholis</a></li>
                                            <li><a href="#">Dupatta & Shawls</a></li>
                                            <li><a href="#">Jackets</a></li>
                                        </ul>
                                        <hr />
                                        <h2 className="item-2-heading">Belts, Scarves & More</h2>
                                        <h2 className="item-2-heading">Watches & Wearables</h2>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <h2 className="item-2-heading">Wester Wear</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Dresses</a></li>
                                            <li><a href="#">Tops</a></li>
                                            <li><a href="#">Tshirts</a></li>
                                            <li><a href="#">Jeans</a></li>
                                            <li><a href="#">Trousers & Capris</a></li>
                                            <li><a href="#">Shorts & Skirts</a></li>
                                            <li><a href="#">Co-ords</a></li>
                                            <li><a href="#">Playsuits</a></li>
                                            <li><a href="#">Jumpsuits</a></li>
                                            <li><a href="#">Shrugs</a></li>
                                            <li><a href="#">Sweaters & Sweatshirts</a></li>
                                            <li><a href="#">Jaackets & Coats</a></li>
                                            <li><a href="#">Blazers & Waistcoats</a></li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <h2 className="item-2-heading">Shop By Occasion</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Casual Outing</a></li>
                                            <li><a href="#">Wedding</a></li>
                                            <li><a href="#">Party</a></li>
                                            <li><a href="#">Workout</a></li>
                                            <li><a href="#">Vacation</a></li>
                                            <li><a href="#">At Home</a></li>
                                        </ul>
                                        <hr />
                                        <h2 className="item-2-heading">Plus Size</h2>
                                        <h2 className="item-2-heading">Maternity</h2>
                                        <h2 className="item-2-heading">Sunglasses & frames</h2>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <h2 className="item-2-heading">Footwear</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Flats</a></li>
                                            <li><a href="#">Casual Shoes</a></li>
                                            <li><a href="#">Heels</a></li>
                                            <li><a href="#">Boots</a></li>
                                            <li><a href="#">Sports Shoes & Floaters</a></li>
                                        </ul>
                                        <hr />
                                        <h2 className="item-2-heading">Sports & Active Wear</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Cloathing</a></li>
                                            <li><a href="#">Footwear</a></li>
                                            <li><a href="#">Sports Accessories</a></li>
                                            <li><a href="#">Sports Equipment</a></li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#" className="menu-item-3">KIDS</a>
                        <div className="mega-menu">
                            <div className="content">
                                <div className="col">
                                    <section>
                                        <h2 className="item-3-heading">Boys Clothing</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">T-Shirts</a></li>
                                            <li><a href="#">Shirts</a></li>
                                            <li><a href="#">Shorts</a></li>
                                            <li><a href="#">Jeans</a></li>
                                            <li><a href="#">Trousers</a></li>
                                            <li><a href="#">Clothing Sets</a></li>
                                            <li><a href="#">Ethinic Wear</a></li>
                                            <li><a href="#">Track Pants & Pyjamas</a></li>
                                            <li><a href="#">Jacket,Sweater & Sweatshirts</a></li>
                                            <li><a href="#">Party Wear</a></li>
                                            <li><a href="#">Innerwear & Thermals</a></li>
                                            <li><a href="#">Nightwear & Loungewear</a></li>
                                            <li><a href="#">Value Packs</a></li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <h2 className="item-3-heading">Girls Clothing</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Dresses</a></li>
                                            <li><a href="#">Tops</a></li>
                                            <li><a href="#">Tshirts</a></li>
                                            <li><a href="#">Clothing Sets</a></li>
                                            <li><a href="#">Lehenga Choli</a></li>
                                            <li><a href="#">Kurta Sets</a></li>
                                            <li><a href="#">Party wear</a></li>
                                            <li><a href="#">Dungarees & Jumpsuits</a></li>
                                            <li><a href="#">Skirts & shorts</a></li>
                                            <li><a href="#">Tights & Leggings</a></li>
                                            <li><a href="#">Jeans, Trousers & Capris</a></li>
                                            <li><a href="#">Innerwear & Thermals</a></li>
                                            <li><a href="#">Nightwear & Loungewear</a></li>
                                            <li><a href="#">Value Packs</a></li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <h2 className="item-3-heading">Footwear</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Casual Shoes</a></li>
                                            <li><a href="#"> Flipflops</a></li>
                                            <li><a href="#">Sports Shoes</a></li>
                                            <li><a href="#">Flats</a></li>
                                            <li><a href="#">sandals</a></li>
                                            <li><a href="#">Heels</a></li>
                                            <li><a href="#">Socks</a></li>
                                        </ul>
                                        <hr />
                                        <h2 className="item-3-heading">Toys</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Learning & Development</a></li>
                                            <li><a href="#"> Activity Toys</a></li>
                                            <li><a href="#">Soft Toys</a></li>
                                            <li><a href="#">Action Figure / Play set</a></li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <h2 className="item-3-heading">Infants</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Bodysuits</a></li>
                                            <li><a href="#">Rompers & sleepsuits</a></li>
                                            <li><a href="#">Clothing Sets</a></li>
                                            <li><a href="#">Tshirts & Tops</a></li>
                                            <li><a href="#">Dresses</a></li>
                                            <li><a href="#">Bottom Wear</a></li>
                                            <li><a href="#">Winter Wear</a></li>
                                            <li><a href="#">Innerwear & Sleepwear</a></li>
                                            <li><a href="#">Infant Care</a></li>
                                        </ul>
                                        <hr />
                                        <h2 className="item-3-heading">Home & Bath</h2>
                                        <h2 className="item-3-heading">Personal Care</h2>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#" className="menu-item-4">HOME & LIVING</a>
                        <div className="mega-menu">
                            <div className="content4">
                                <div className="col">
                                    <section>
                                        <h2 className="item-4-heading">Bed Linen & Furnishing</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Bedsheets</a></li>
                                            <li><a href="#">Bedding Sets</a></li>
                                            <li><a href="#">Blankets,Quilts & Dohars</a></li>
                                            <li><a href="#">Pillows & Pillow Covers</a></li>
                                            <li><a href="#">Bed Covers</a></li>
                                            <li><a href="#">Diwan Sets</a></li>
                                            <li><a href="#">Chair Pads & Covers</a></li>
                                            <li><a href="#">Sofa Covers</a></li>
                                        </ul>
                                        <hr />
                                        <h2 className="item-4-heading">Flooring</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Carpets</a></li>
                                            <li><a href="#">Floor Mats & Dhurries</a></li>
                                            <li><a href="#">Door Mats</a></li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <h2 className="item-4-heading">Bath</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Bath Towels</a></li>
                                            <li><a href="#">Hand & Face Towels</a></li>
                                            <li><a href="#">Beach Towels</a></li>
                                            <li><a href="#">Towels Set</a></li>
                                            <li><a href="#">Bath Rugs</a></li>
                                            <li><a href="#">Bath Robes</a></li>
                                            <li><a href="#">Bathroom Accessories</a></li>
                                            <li><a href="#">Shower Curtains</a></li>
                                        </ul>
                                        <hr />
                                        <h2 className="item-4-heading">Lamps & Lighting</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Floor Lamps</a></li>
                                            <li><a href="#">Ceiling Lamps</a></li>
                                            <li><a href="#">Table Lamps</a></li>
                                            <li><a href="#">Wall Lamps</a></li>
                                            <li><a href="#">Outdoor Lamps</a></li>
                                            <li><a href="#">String Lights</a></li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <h2 className="item-4-heading">Home Decor</h2>
                                        <ul className="mega-links">
                                            <li><Link to="/furniture">Furniture</Link></li>
                                            <li><a href="#">Plants & Planters</a></li>
                                            <li><a href="#"> Aromas & Candles</a></li>
                                            <li><a href="#">Clocks</a></li>
                                            <li><a href="#">Mirrors</a></li>
                                            <li><a href="#">Wall Decor</a></li>
                                            <li><a href="#">Festive Decor</a></li>
                                            <li><a href="#">Pooja Essentials</a></li>
                                            <li><a href="#">Wall Shelves</a></li>
                                            <li><a href="#">Fountains</a></li>
                                            <li><a href="#">Showpiece & Vases</a></li>
                                        </ul>
                                        <hr />
                                        <h2 className="item-4-heading">Cushions & Cushion Covers</h2>
                                        <h2 className="item-4-heading">Curtains</h2>
                                        <h2 className="item-4-heading">Home Gift Sets</h2>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <h2 className="item-4-heading">Kitchen & Table</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Dinnerware & Serveware</a></li>
                                            <li><a href="#">Cups and Mugs</a></li>
                                            <li><a href="#">Bakeware & Cookware</a></li>
                                            <li><a href="#">Kitchen Storage & Tools</a></li>
                                            <li><a href="#">Bar & Drinkware</a></li>
                                            <li><a href="#">Table Covers & Furnishings</a></li>
                                        </ul>
                                        <hr />
                                        <h2 className="item-4-heading">Storage</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Oraganisers</a></li>
                                            <li><a href="#">Hooks & Holders</a></li>
                                            <li><a href="#">Laundry Bags</a></li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <h2 className="item-4-heading">Brands</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Home Centre</a></li>
                                            <li><a href="#">Spaces</a></li>
                                            <li><a href="#">D'Decor</a></li>
                                            <li><a href="#">Portico NewYork</a></li>
                                            <li><a href="#">Story@Home</a></li>
                                            <li><a href="#">Pure Home & Living</a></li>
                                            <li><a href="#">Swayam</a></li>
                                            <li><a href="#">Raymond Home</a></li>
                                            <li><a href="#">Maspar</a></li>
                                            <li><a href="#">Corelle</a></li>
                                            <li><a href="#">Trident</a></li>
                                            <li><a href="#">Cortina</a></li>
                                            <li><a href="#">Random</a></li>
                                            <li><a href="#">Ellementry</a></li>
                                            <li><a href="#">ROMEE</a></li>
                                            <li><a href="#">SEJ by Nisha Gupta</a></li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#" className="menu-item-5">BEAUTY</a>
                        <div className="mega-menu">
                            <div className="content4">
                                <div className="col">
                                    <section>
                                        <h2 className="item-5-heading">Makeup</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Lipstick</a></li>
                                            <li><a href="#">Lip Gloss</a></li>
                                            <li><a href="#">Lip Liner</a></li>
                                            <li><a href="#">Mascara</a></li>
                                            <li><a href="#">Eyeliner</a></li>
                                            <li><a href="#">Kajal</a></li>
                                            <li><a href="#">Eyeshadow</a></li>
                                            <li><a href="#">Foundation</a></li>
                                            <li><a href="#">Primer</a></li>
                                            <li><a href="#">Concealer</a></li>
                                            <li><a href="#">Compact</a></li>
                                            <li><a href="#">Nail Polish</a></li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <h2 className="item-5-heading">Skincare, Bath & Body</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Face Moisturiser</a></li>
                                            <li><a href="#">Cleanser</a></li>
                                            <li><a href="#">Masks & Peel</a></li>
                                            <li><a href="#">Sunscreen</a></li>
                                            <li><a href="#">Serum</a></li>
                                            <li><a href="#">Face Wash</a></li>
                                            <li><a href="#">Lip Balm</a></li>
                                            <li><a href="#">Body Lotion</a></li>
                                            <li><a href="#">Body Wash</a></li>
                                            <li><a href="#">Body Scrub</a></li>
                                            <li><a href="#">Hand Cream</a></li>
                                        </ul>
                                        <hr />
                                        <h2 className="item-5-heading">Baby Care</h2>
                                        <h2 className="item-5-heading">Masks</h2>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <h2 className="item-5-heading">Hair Carer</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Shampoo</a></li>
                                            <li><a href="#">Conditoner</a></li>
                                            <li><a href="#">Hair Cream</a></li>
                                            <li><a href="#">Hair Oil</a></li>
                                            <li><a href="#">Hair Gel</a></li>
                                            <li><a href="#">Hair Color</a></li>
                                            <li><a href="#">Hair Serum</a></li>
                                            <li><a href="#">Hair Accessory</a></li>
                                        </ul>
                                        <hr />
                                        <h2 className="item-5-heading">Fragrances</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Perfume</a></li>
                                            <li><a href="#">Deodrant</a></li>
                                            <li><a href="#">Body Mist</a></li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <h2 className="item-5-heading">Appliances</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Hair Straightner</a></li>
                                            <li><a href="#">Hair Dryer</a></li>
                                            <li><a href="#">Epilator</a></li>
                                        </ul>
                                        <hr />
                                        <h2 className="item-5-heading">Men's Grooming</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Trimmers</a></li>
                                            <li><a href="#">Beard Oil</a></li>
                                            <li><a href="#">Hair Wax</a></li>
                                        </ul>
                                        <hr />
                                        <h2 className="item-5-heading">Premium Beauty</h2>
                                        <h2 className="item-5-heading">Wellness & Hygiene</h2>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <h2 className="item-5-heading">Brands</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Lakme</a></li>
                                            <li><a href="#">Maybelline</a></li>
                                            <li><a href="#">LOreal</a></li>
                                            <li><a href="#">Philips</a></li>
                                            <li><a href="#">Bath & Body Works</a></li>
                                            <li><a href="#">THE BODY SHOP</a></li>
                                            <li><a href="#">Biotique</a></li>
                                            <li><a href="#">Mamaearth</a></li>
                                            <li><a href="#">MCaffeine</a></li>
                                            <li><a href="#">Nivea</a></li>
                                            <li><a href="#">Lotus Herbals</a></li>
                                            <li><a href="#">LOreal Professionnel</a></li>
                                            <li><a href="#">KAMA AYURVEDA</a></li>
                                            <li><a href="#">M.A.C</a></li>
                                            <li><a href="#">Forest Essentials</a></li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#" className="menu-item-6">STUDIO<span className="sup-part">NEW</span></a>
                        <div className="mega-menu">
                            <div className="content-6">
                                <div className="col">
                                    <section>
                                        <img className="image-1" src="https://constant.myntassets.com/web/assets/img/studio-logo-new.svg" alt="" />
                                            <p>Your daily insipiration for everything fashion </p>
                                            <img className="image-2" src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png" alt="" />
                                                <button className="image-3">Explore Studio</button>
                                                </section>
                                            </div>
                                        </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className="search-div">
                        <img
                            id="searchpng"
                            src="https://www.svgrepo.com/show/510181/search.svg"
                            alt=""
                        />

                        <input
                            type="text"
                            placeholder="Search for products, brands and more"
                            value={filterValue}
                            onChange={(e)=> handleFilter(e)}
                        />
                    </div>
                        
                    <div className="nav-last">
                    <div>
                    <a href="">
                        <img
                        id="svg"
                        src="https://www.svgrepo.com/show/198180/user-profile.svg"
                        alt=""
                        />
                    </a>

                    <div className="dropdown">
                        <a className="dropbtn">Profile</a>
                        <div className="dropdown-content">
                            <h3>Welcome</h3>
                            <p>To access account and mange orders</p>
                            <button className="btn-redirect"> <Link to="/login" className="login-btn">LOGIN / SIGNUP</Link> </button>
                            <hr className="hr1" />
                            <a href="#">Orders</a>
                            <Link to="/wishlist">Wishlist</Link>
                            <a href="#">Gift Cards</a>
                            <a href="#">Contact Us</a>
                            <a href="#">Myntra Insider <span className="new">New</span></a>
                            <hr className="hr2" />
                            <a href="#">Myntra Credit</a>
                            <a href="#">Coupons</a>
                            <a href="#">Saved Cards</a>
                            <a href="#">Saved Addresses</a>
                        </div>
                    </div>
                    </div>

                    <div>
                    <Link to="/wishlist">
                        <img
                        id="svg"
                        src="https://www.svgrepo.com/show/14970/heart.svg"
                        alt=""
                        />
                        <div>Wishlist</div>
                        <span id = "cart-count-info1">{productwishlist.length}</span>
                    </Link>
                    </div>

                    <div>
                    <Link to="/bag">
                        <img
                        id="svg"
                        src="https://www.svgrepo.com/show/17522/bag.svg"
                        alt=""
                        />
                        <div id='bag'>Bag</div>
                        <span id = "cart-count-info2">{productcart.length}</span>
                    </Link>
                    </div>
                </div>
    </header>
    )
}
