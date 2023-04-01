import React from 'react'
import "./Otp.css"
import { Navbar } from '../../../components/Navbar/Navbar'

const Otp = () => {
  return (
    <div>
    <Navbar/>
        <div className='maindiv'>
            <div id="mainContent">
                <div id="saleTimerContent" className="hide"></div>
                    <div id="MyntraReactContent">
                        <div>
                            <div id="mainReactContent">
                                <div id="reactPageContent">
                                    <div className="verificationContainer">
                                        <div className="otpTopImage">
                                            <div className="image">
                                                <div className="LazyLoad  is-visible"/>
                                                    <picture className="img-responsive">
                                                        <source srcSet="//constant.myntassets.com/pwa/assets/img/3a438cb4-c9bf-4316-b60c-c63e40a1a96d1548071106233-mobile-verification.jpg" type="image/webp" />
                                                        <img src="//constant.myntassets.com/pwa/assets/img/3a438cb4-c9bf-4316-b60c-c63e40a1a96d1548071106233-mobile-verification.jpg" className="img-responsive preLoad loaded" alt="" title="" />
                                                    </picture>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mobContainer">
                                            <h3>Verify with OTP</h3>
                                            <h4>Sent to 7319908062</h4>
                                            <div className="otpContainer">
                                                <input name="otp0" type="tel" maxLength="1" data-val="0" autoComplete="off"  />
                                                <input name="otp1" type="tel" maxLength="1" data-val="1" autoComplete="off"  />
                                                <input name="otp2" type="tel" maxLength="1" data-val="2" autoComplete="off"  />
                                                <input name="otp3" type="tel" maxLength="1" data-val="3" autoComplete="off" />
                                            </div>
                                        <div>
                                        <button className="resendContainer">RESEND OTP</button>
                                    </div>
                                </div>
                                <div className='bottomlink'>
                                    <div className="bottomeLink"> Log in using <span> Password </span> </div>
                                    <div className="bottomeLink"> Having trouble logging in? <span> Get help </span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Otp