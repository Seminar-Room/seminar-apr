import "./ContactUs.css";
import BlackLogo from "../../assets/black-logo.png"
import calling from "../../assets/calling.png"
import atsymbol from "../../assets/atsymbol.png"
import linkedin from "../../assets/linkedin.png"
import insta from "../../assets/insta.png"

export default function ContactUs(){
    return(
        <>
            <div className="contact-us-bg">
                <div className="contact-us-content">
                    <img alt="logo-black" className="contact-us-logo" src={BlackLogo}/>
                    <div className="contact-us-explore">
                        <h2>Explore</h2>
                        <a href="/">About Us</a><br/>
                        <a href="/">Page 2</a><br/>
                        <a href="/">Page 1</a>
                    </div>
                    <div className="contact-us-contact-us">
                        <h2>Contact Us</h2>
                        <div className="contact-us-phone-no">
                            <div className="contact-name">Pankaj Mehta<br/><br/>
                            <img alt="calling" src={calling}></img>+91 95380 03405</div>
                            <div className="contact-name">Shashank Lokesh<br/><br/>
                            <img alt="calling" src={calling}></img>+91 95380 03405<br/><br/>
                            <img alt="calling" src={atsymbol}></img><a href="shashank@seminarroom.in">shashank@seminarroom.in</a></div>
                            </div>
                    </div>
                    <div className="contact-us-stay-conn">
                        <h2>Stay Connected</h2>
                        <div className="contact-us-linked-in">
                            <img alt="linkedIn" src={linkedin}></img><a href="www.linkedin.com/company/seminar-room">SeminarRoom</a>
                        </div>
                        <div className="contact-us-insta">
                            <img alt="instagram" src={insta}></img><a href="www.linkedin.com/company/seminar-room">SeminarRoom</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}