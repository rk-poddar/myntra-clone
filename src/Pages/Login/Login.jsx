import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import './Login.css'

const Login = () => {
  return (
    <>
        <div id="container">
            <div id="o_div">
                <div ID="img_div">

                    <img id="img" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/3/16/d4edb37c-aee8-4989-86f4-33b117edd4bc1647415464555-Banner_Login-Landing-page--1-.jpg" alt="" />
                </div>
            </div>


            <div id="log">
                <form id="form">


                    <h5 >Login <span>or</span> Signup</h5> <br />
                    <input id="num" type="tel" placeholder="Mobile Number" maxLength={10}/><br /><span className='plcnum'>+91</span>
                    <p>By continuing I agree to the <a href="https://www.myntra.com/termsofuse">Terms of Use</a> & <a href="https://www.myntra.com/privacypolicy">Privacy</a> <br /><a href="https://www.myntra.com/privacypolicy">Policy</a> </p>
                    <input id="btn"  type="submit" value="Continue" /> <br />
                    <p id="p">Have trouble logging in ? <a href="https://www.myntra.com/privacypolicy">Get Help</a></p> <br />

                </form>
            
            </div>
        </div>
    </>
  )
}

export default Login