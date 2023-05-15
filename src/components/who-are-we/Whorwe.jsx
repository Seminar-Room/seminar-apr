import "./Whorwe.css" ; 
import stats from "../../assets/div.png" ;
import hostpic from"../../assets/hostpic.png"
export default function Whorwe(){
    return(
        <>
        <div className="heading">Who are we ?</div> 
            <div className="whorwebody">
             
                
               <div className="divisions">
               <img className="picture" src={hostpic} alt="hostpichere"></img>
               </div>
               <div>
                
               <div className="txt1">We are a unique Ed-Tech Company that works directly with colleges to inspire students on </div>
               <div className="txt2">“Why they learn, what they learn” </div>
               <div className="txt3">by curating sessions and guest lectures with SMEs from Industries around the world.</div>
               <div className="statbox">
                    <img className="statimg" src={stats} alt='stats here'/>
                   
               </div>

               </div>
            </div>
        </>
    )
}