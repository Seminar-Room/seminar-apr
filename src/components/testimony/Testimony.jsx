import "./testimony.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import gt from "../../assets/gt.png" 
import surana from "../../assets/surana.png" 
import jain from "../../assets/jain.png"
import bhavani from "../../assets/bhavani.png" 
import naveen from "../../assets/naveen.png"


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import director from "../../assets/testimoney.png" ; 

export default function Testimony(){
    return(
        <> 
        <div className="testbody">
        <div className="college" >College Testimonials</div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><div className="testcard">
            <div className="tstbox" >We took Seminarroom's Industry Interface activities which happen to be one of the high end program that enhances Employability quotient of students. It is a must program for every Graduate student. Taking this program has improved the industry exposure of our college.</div>
            <div className="sir"  >
                <img className="director" src={director} alt="hello"/>
            </div>
            <div className="by">Dr. B. G. Satyaprasad</div>
             <div className="by">Director, G.T. Institute</div>
        </div></SwiperSlide>
        <SwiperSlide><div className="testcard">
         
            <div className="tstbox" >In simple and clear terms, Seminarrom has motivated students and faculty alike. Every session organized resonate the need of the day for the youth to tread fearlessly and confidently towards their goals.</div>
            <div className="sir"  >
                <img className="director" src={bhavani}  alt="profile"/>
            </div>
            <div className="by">Dr. Bhavani M R</div>
             <div className="by">Principal, Surana College</div>
         
        </div></SwiperSlide>
        <SwiperSlide><div className="testcard">
        <div className="tstbox" >Driven by values, Seminarroom is able to uncover and connect unsettling gaps such as lack of enhanced industry exposure which have been hurting academia the most. Our students have greatly benefitted from this program.</div>
            <div className="sir"  >
                <img className="director" src={naveen}   alt="profile"/>
            </div>
            <div className="by">Naveen Kumar</div>
             <div className="by">Principal, Jain College</div>
         
        </div></SwiperSlide>
         
      </Swiper>
      <div className="clientlogo">
          <img src= {gt} className="gt" alt="logo"/>
          <img src= {surana} className="surana" alt="logo"/>
          <img src= {jain} className="jain" alt="logo"/>

      </div>
      </div>
        </>
    )
}