import React from 'react'
import Products from '../../components/Products/Products'
import Footer from "../../components/Footer/Footer"
import "./Home.css"
import { Navbar } from '../../components/Navbar/Navbar'

const Home = () => {
    return (
        <>
        <Navbar/>
        <main className='main'>
            <div id="myCarousel-indicators " className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel-indicators " data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel-indicators " data-slide-to="1"></li>
                    <li data-target="#myCarousel-indicators " data-slide-to="2"></li>
                    <li data-target="#myCarousel-indicators " data-slide-to="3"></li>
                    <li data-target="#myCarousel-indicators " data-slide-to="4"></li>
                    <li data-target="#myCarousel-indicators " data-slide-to="5"></li>
                    <li data-target="#myCarousel-indicators " data-slide-to="6"></li>
                    <li data-target="#myCarousel-indicators " data-slide-to="7"></li>
                    <li data-target="#myCarousel-indicators " data-slide-to="8"></li>
                </ol>
                
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/14/7cec9b95-a683-473c-aca8-cc510821b1cd1676394720493-Desktop-Banner.gif" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.jpg" alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg" alt="Fourth slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg" alt="Fifth slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg" alt="Sixth slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg" alt="Seventh slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg" alt="Eigth slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg" alt="Ninth slide" />
                    </div>
                </div>
            </div>
        </main>
        <Products/>
        <Footer/>
        </>
    )
}

export default Home