import { Navigate, useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/logo.png"
import './feedback.css'
import { useState } from "react";
import { useUser } from "../../context/user-context";
import { useMessage } from "../../context/message-context";
import { useEffect } from "react";
export default function Feedback(){
    const {id} = useParams();
    const [userFeedback,setUserFeedback] = useState("");
    const {userObj, setUserObj} = useUser();
    var {displayMessage, setDisplayMessage} = useMessage();
    const navigate = useNavigate();
    const handleFormChange = (evt) => {
        const value = evt.target.value;
        setUserFeedback(value);
      }

      const logFeedback = async (userInfo) => {
        setDisplayMessage("Submitting feedback...");
        var feedbackObj = {
            email: userInfo ? userInfo.email : localStorage.getItem("email"),
            course: userInfo ? userInfo.course : localStorage.getItem("course"),
            college: userInfo ? userInfo.college : localStorage.getItem("college"),
            sessionId: id,
            feedback: userFeedback,
        }
        var response = await fetch("http://seminarroom.in:5000/api/feedback", {
                method: "POST",
                body: JSON.stringify(feedbackObj),
                headers: {
                    "Content-Type": "application/json",
                  },
            }).then(result => result.json())
        if(response.acknowledged){
            setDisplayMessage("Feedback Submitted!")
            setTimeout(() => {
                setDisplayMessage("");
                navigate('/')
            },1000)
        }
    }
    useEffect(() => {
        setDisplayMessage("");
    }, [])

    return(
        <div>
            <div className="navbar-regular">
                <a href="/">
                    <img alt="Seminar Room" className="logo" src={logo}/>
                </a>
                <div className="nav-links">
                    <a href="/dashboard" className="nav-item">Dashboard</a>
                    <a href="/" className="nav-item">About Us</a>
                    <a href="/" className="nav-item">Contact Us</a>
                </div>
            </div>
            <div style={{display:'flex', justifyContent: 'center', margin: '2rem'}}>
                <div style={{display:'flex', flexDirection: 'column', alignItems:'center', width: '400px', gap: '2rem'}}>
                    <div className="feedback-title">Feedback</div>
                    {displayMessage ? (<div className="alert alert-info">
                        <div className="alert-message information">{displayMessage}</div>
                    </div>) :( <div></div> )}
                    <textarea className="feedback-input" onChange={handleFormChange}></textarea>
                    <button className="action-button-primary" onClick={() => {
                        logFeedback(userObj);
                    }}>Submit</button>
                </div>
            </div>
           
        </div>
    )
}