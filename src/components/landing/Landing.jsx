import "./landing.css"
import logo from "../../assets/logo.png"

/* eslint-disable react/jsx-key */
import "../demo/demo.css" 
// import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import pes from "../../assets/pes.png"
// import ifim from "../../assets/ifim.png"
// import jainc from "../../assets/jaincollege.png"
// import mount from "../../assets/mount.png" 
// import kle from '../../assets/kle.png'
// import nitte from "../../assets/nitte.png" 
// import sage from '../../assets/sage.png'
// import naga from '../../assets/nagarjuna1.webp'
import bgvideo from '../../assets/bgvideo.mp4'
import bgposter from '../../assets/My Movie 2 2.png'
import { useNavigate } from "react-router-dom";


import pes from  "../../assets/pes.png"
import ifim from "../../assets/ifim.png"
import jainc from "../../assets/jaincollege.png"
import mount from "../../assets/mount.png" 
import kle from '../../assets/kle.png'
import nitte from "../../assets/nitte.png" 
import sage from '../../assets/sage.png'
import naga from '../../assets/nagarjuna.png'
import sur from '../../assets/surana.png'
import gm from "../../assets/gt.png"
import ew from "../../assets/eastwest.png" 
import ari from "../../assets/arih.png"
import amb from "../../assets/amb.png"
import sri from "../../assets/sri.png"
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
 

export default function Landing(){
    const navigate = useNavigate()
    // const responsive = {
    //     0: { items: 1 },
    //     256 : {items : 2},
    //     568: { items: 3},
    //     700 : {items: 4} ,
    //     1004: { items: 5 },
    //     1100:{items : 6} ,
    //     1200 : {items: 7}
    // };
    
    
    return(
        <>
            <div className="navbar">
                <img alt="Seminar Room" className="logo" src={logo}/>
                <div className="navbar-links">
                <a href="/dashboard" className="contact-us">Dashboard</a>
                <a href="/" className="about-us">About Us</a>
                <a href="/" className="contact-us">Contact Us</a>
                <button className="sign-up" onClick={()=>navigate("/login")}>Join Now</button> 
            </div>
            </div>
            <div className="first-page">
            <div className="main-content">
                Real-life scenarios for real world success<br/>
                <button className="sign-up-content" onClick={()=>navigate("/login")}>Join Now</button>
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
                <video id="background-video" autoPlay loop muted poster={bgposter}>
                    <source src={bgvideo} type="video/mp4"/>
                </video> 
                <div className="circle-bottom"></div>
                </div>
            </div>
            </div>
            <div className="marq">
                <Marquee speed={100}>
                <div className="ele">
                    <img className="pes" src={pes} alt='logo'/>
                </div>
                <div className="ele">
                    <img className="pes" src={ifim} alt='logo'/>
                </div>
                <div className="ele">
                    <img className="pes" src={jainc} alt='logo'/>
                </div>
                <div className="ele">
                    <img className="pes" src={mount} alt='logo'/>
                </div>
                <div className="ele">
                    <img className="pes" src={kle} alt='logo'/>
                </div>
                <div className="ele">
                    <img className="nitte" src={nitte} alt='logo'/>
                </div>
                <div className="ele">
                    <img className="nitte" src={sage} alt='logo'/>
                </div>
                <div className="ele">
                    <img className="pes" src={naga} alt='logo'/>
                </div>
                <div className="ele">
                    <img className="pes" src={sur} alt='logo'/>
                </div>
                <div className="ele">
                    <img className="pes" src={gm} alt='logo'/>
                </div>
                <div className="ele">
                    <img className="pes" src={ew} alt='logo'/>
                </div>
                <div className="ele">
                    <img className="pes" src={ari} alt='logo'/>
                </div>
                <div className="ele">
                    <img className="pes" src={amb} alt='logo'/>
                </div>
                <div className="ele">
                    <img className="pes" src={sri} alt='logo'/>
                </div>
                </Marquee>

            </div>
     
        </>
    )
}