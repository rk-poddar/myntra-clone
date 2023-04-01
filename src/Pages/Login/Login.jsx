import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import './Login.css'
import {useNavigate} from "react-router-dom"

const Login = () => {

    const navigate = useNavigate();

    function sendOTP(){
        let num = document.getElementById('num').value
        if(num){
            navigate("/login/otp")
        }
        else{
            alert("Please enter the number")
        }
    }

    return (
    <>
        <Navbar/>
        <div id="container">
            <div id="o_div">
                <div ID="img_div">

                    <img id="img" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg" alt="" />
                </div>
            </div>


            <div id="log">
                <form id="form">


                    <h5 >Login <span>or</span> Signup</h5> <br />
                    <input id="num" type="tel" placeholder="Mobile Number" maxLength={10} /><br /><span className='plcnum'>+91</span>
                    <p id='p'>By continuing I agree to the <a href="https://www.myntra.com/termsofuse">Terms of Use</a> & <a href="https://www.myntra.com/privacypolicy">Privacy</a> <a href="https://www.myntra.com/privacypolicy">Policy</a> </p>
                    <input id="btn"  type="submit" value="Continue" onClick={sendOTP} /> <br />
                    <p id="p">Have trouble logging in ? <a href="https://www.myntra.com/privacypolicy">Get Help</a></p> <br />

                </form>
            
            </div>
        </div>
    </>
  )
}

export default Login