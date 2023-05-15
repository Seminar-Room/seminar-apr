import  { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sessions.css" ;
import person1 from "../../assets/person1.png" ;
import person2 from "../../assets/person2.png" ;
import person3 from "../../assets/person3.png" ;
import stars from "../../assets/starts.png"
 
 


export default class Session extends Component {
   
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1 ,

       
    };
    return (
      <>
      <div className="heading">Sessions that people love</div>
      <div className="wrapper">
         
        <div className="carousal">
        <Slider {...settings}>
          <div className="cards">
            <div className="profilepic"><img className="propic" src={person1} alt="dp"></img></div>
            <img alt="stars" className="stars" src={stars} />
            <div className="coursen">Entrepreneurship while in campus why and how to !!</div>
            <div className="instructor"> Suresh Narasimha</div>
            <button className="watch">WATCH NOW</button>
          </div>
          <div className="cards">
          <div className="profilepic"><img className="propic" src={person2} alt="dp"></img></div>
          <img alt="stars" className="stars" src={stars} />
          <div className="coursen">Evolution of Programming Language C over the years</div>
          <div className="instructor">Harsha Bandi</div>
          <button className="watch">WATCH NOW</button>
          </div>
          <div className="cards">
          <div className="profilepic"><img className="propic" src={person3} alt="dp"></img></div>
          <img alt="stars" className="stars" src={stars} />
          <div className="coursen">Why students need to be Digitally Fluent</div>
          <div className="instructor">Sripriya Sridhar</div>
          <button className="watch">WATCH NOW</button>
          </div>
          <div className="cards">
          <div className="profilepic"><img className="propic" src={person1} alt="dp"></img></div>
          <img alt="stars" className="stars" src={stars} />
          <div className="coursen">Entrepreneurship while in campus why and how to !!</div>
            <div className="instructor"> Suresh Narasimha</div>
            <button className="watch">WATCH NOW</button>
          </div>
           
          
        </Slider>
        <button className="explorebutton">Explore Classes</button>
        </div>
       
      </div>
      </>
    );
  }
}