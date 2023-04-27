import "./meetteam.css" ; 
import CEO from "../assets/CEO.png"
import COO from "../assets/COO.png"
import CPO from "../assets/CPO.png"
 

export default function Meetteam(){
    
        return(
            <>
                <div className="meetbody">
                <div className="1">
                    <div className="head">Meet Our Team</div>
                    <div className="desc">We are dedicated professionals who want to leave a great mark on the planet! We have a fire in us that helps us be better, every single day and help change the world.</div>
                    <button className="btnn">Explore</button>
                </div>
                <div className="2">
                    <img className="CEO" src={CEO} />
                    <img className="COO" src={COO} />
                    <img className="CPO" src={CPO} />
                </div>

                </div>
            </>
        )
}