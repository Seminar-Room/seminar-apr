import { useState } from "react";
import { useRef } from "react"
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import "./auth.css"
import logo from "../../assets/logo.png"
import { useMessage } from "../../context/message-context";
import { useEffect } from "react";


export default function VerifyUser(){
    const navigate = useNavigate();
    var emailId = useRef("");
    var password = useRef("");
    var [userResp, setUserResp] = useState(null);
    var {displayMessage, setDisplayMessage} = useMessage();
    var userState = localStorage.getItem("userState") ? localStorage.getItem("userState") : null;
    var accessToken = localStorage.getItem("accessToken") ? localStorage.getItem("accessToken") : null;

    const verifyUserEmail = async (emailId) => {
        var response = await fetch("http://localhost:5000/api/verify-user", {
            method: "POST",
            body: JSON.stringify({email: emailId}),
            headers: {
                "Content-Type": "application/json",
              },
        }).then(result => result.json())
        if(response.data){
            setUserResp(response.data)
            
            localStorage.setItem("username", response.data.name)
            localStorage.setItem("email", response.data.email)
        }
        setDisplayMessage(response.message ? response.message : "")
    }

    const login = async (emailId, password) => {
        var response = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            body: JSON.stringify({email: emailId, password: password}),
            headers: {
                "Content-Type": "application/json",
              },
        }).then(result => result.json())
        if(response.success === true){
            if(response.data){
                localStorage.setItem("accessToken", response.data.accessToken)
                localStorage.setItem("userState", 'ACTIVE')
            }
            setTimeout(() => {
                setDisplayMessage("");
                navigate("/dashboard")
            }, 1000)
        }
        setDisplayMessage(response.message)
    }

    useEffect(() => {
        if(userState === 'ACTIVE' && accessToken){
            setDisplayMessage("Already Logged In!")
            setTimeout(() => {
                setDisplayMessage("");
                navigate('/dashboard')
            }, 1000)
        }
    }, [])

    return (
        <>
            <div className="page-container">
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
                <div className="auth-container">
                    {displayMessage ? (<div className="alert alert-info">
                        <div className="alert-message information">{displayMessage}</div>
                    </div>) :( <div></div> )}
                    <div className="verify-container">
                        <div className="auth-input-container">
                            <div className="auth-input-label">Email:</div>
                            <input className="auth-input"  type="text" ref={emailId} />
                        </div>
                        <button className="action-button-secondary" onClick={() => {
                            verifyUserEmail(emailId.current.value)
                        }}>Verify Email</button>
                    </div>
                    { userResp ?(userResp.signUpCompleted ? 
                    (   <div style={{marginTop: '2rem'}}>
                            <div className="verify-container">
                                <div className="auth-input-container">
                                    <div className="auth-input-label">Password:</div>
                                    <input className="auth-input"  type="text" ref={password} />
                                </div>
                                <div>
                                    <button className="action-button-primary" onClick={() => {
                                        login(emailId.current.value, password.current.value)
                                    }}>Login
                                    </button>
                                </div>
                            </div> 
                            
                        </div>
                    )
                    : <SignUp email={userResp.email}/>): "" }
                </div>
                
           </div>
        </>
    )
}