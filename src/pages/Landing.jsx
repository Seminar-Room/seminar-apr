import "./landing.css"
import logo from "../assets/logo.png"

/* eslint-disable react/jsx-key */
import "./demo.css" 
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import pes from "../assets/pes.png"
import ifim from "../assets/ifim.png"
import jainc from "../assets/jaincollege.png"
import mount from "../assets/mount.png" 
import kle from '../assets/kle.png'
import nitte from "../assets/nitte.png" 
import sage from '../assets/sage.png'
import naga from '../assets/nagarjuna1.webp'


export default function Landing(){
    const responsive = {
        0: { items: 1 },
        256 : {items : 2},
        568: { items: 3},
        700 : {items: 4} ,
        1004: { items: 5 },
        1100:{items : 6} ,
        1200 : {items: 7}
    };
    
    const items = [
        <div className="beubox" data-value="1">
            <img className="imgs" src={pes} alt="logo"/>
        </div>,
        <div className="beubox" data-value="2">
             <img className="imgs" src={ifim} alt="logo"/>
        </div>,
        <div className="beubox" data-value="3">
             <img className="imgs" src={jainc} alt="logo"/>
        </div>, 
        <div className="beubox" data-value="4">
        <img className="imgs" src={mount} alt="logo"/>
    </div>, 
    <div className="beubox" data-value="5">
             <img className="imgs" src={kle} alt="logo"/>
        </div>, 
        <div className="beubox" data-value="5">
        <img className="nitte" src={nitte} alt="logo"/>
    </div>, 
         <div className="beubox" data-value="5">
             <img className="nitte" src={sage} alt="logo"/>
        </div>,  
    
    
    
    <div className="beubox" data-value="5">
             <img className="naga" src={naga} alt="logo"/>
        </div>,  
    
    
    
    
    <div className="beubox" data-value="1">
    <img className="imgs" src={pes} alt="logo"/>
    </div>,
    <div className="beubox" data-value="2">
     <img className="imgs" src={ifim} alt="logo"/>
    </div>,
    <div className="beubox" data-value="3">
     <img className="imgs" src={jainc} alt="logo"/>
    </div>, 
    <div className="beubox" data-value="4">
    <img className="imgs" src={mount} alt="logo"/>
    </div>, 
    <div className="beubox" data-value="5">
     <img className="imgs" src={kle} alt="logo"/>
    </div>, 
    <div className="beubox" data-value="5">
    <img className="nitte" src={nitte} alt="logo"/>
    </div>, 
    <div className="beubox" data-value="5">
     <img className="nitte" src={sage} alt="logo"/>
    </div>,  
    
    
    
    <div className="beubox" data-value="5">
     <img className="naga" src={naga} alt="logo"/>
    </div>,  
 
    ];
    





    return(
        <>
            <div className="navbar">
                <img className="logo" src={logo}/>
                <div className="navbar-links">
                <a className="about-us">About Us</a>
                <a className="contact-us">Contact Us</a>
                <button className="sign-up">Sign Up Now</button>
            </div>
            </div>
            <div className="first-page">
            <div className="main-content">
                Real-life scenarios for real world success<br/>
                <button className="sign-up-content">Sign Up now</button>
            </div>
            <div className="first-animation">
                <div className="rect-anim-1">
                    <div className="red-ball"></div>
                    <div className="grey-ball"></div>
                    <div className="grey-rect"></div>
                </div>
                <div className="rect-anim-2">
                <div className="red-ball"></div>
                    <div className="grey-ball"></div>
                    <div className="grey-rect"></div>
                </div>
                <div className="rect-anim-3"></div>
                <div className="circle-anim"> 
                <div className="circle-bottom"></div>
                </div>
            </div>
            </div>
      
        <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
         />
     
        </>
    )
}