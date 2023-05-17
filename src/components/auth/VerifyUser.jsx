import { useState } from "react";
import { useRef } from "react"
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import "./auth.css"
import logo from "../../assets/logo.png"
import { useMessage } from "../../context/message-context";
import { useEffect } from "react";
import { useUser } from "../../context/user-context";


export default function VerifyUser(){
    const navigate = useNavigate();
    var emailId = useRef("");
    var password = useRef("");
    var [userResp, setUserResp] = useState(null);
    var {displayMessage, setDisplayMessage} = useMessage();
    const [collegeList, setCollegeList] = useState(null);
    const [courseList, setCourseList] = useState(null);
    const {userObj, setUserObj} = useUser();
    var userState = localStorage.getItem("userState") ? localStorage.getItem("userState") : null;
    var accessToken = localStorage.getItem("accessToken") ? localStorage.getItem("accessToken") : null;

    const verifyUserEmail = async (emailId) => {
        setDisplayMessage("Verifying email...")
        var response = await fetch("https://seminarroom.in:5000/api/verify-user", {
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
        setDisplayMessage("Logging In...")
        var response = await fetch("https://seminarroom.in:5000/api/login", {
            method: "POST",
            body: JSON.stringify({email: emailId, password: password}),
            headers: {
                "Content-Type": "application/json",
              },
        }).then(result => result.json())
        if(response.success === true){
            setUserObj(response.data);
            if(response.data){
                localStorage.setItem("accessToken", response.data.accessToken)
                localStorage.setItem("userState", 'ACTIVE');
                localStorage.setItem("college", response.data.college)
                localStorage.setItem("course", response.data.course)
            }
            setTimeout(() => {
                setDisplayMessage("");
                navigate("/dashboard")
            }, 1000)
        }
        setDisplayMessage(response.message)
    }
    const getColleges = async() => {
        var response = await fetch("https://seminarroom.in:5000/api/get-colleges",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
        }).then(result => result.json());
        setCollegeList(response.data)
    }
    const getCourses = async() => {
        var response = await fetch("https://seminarroom.in:5000/api/get-courses",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
        });
        response = await response.json();
        setCourseList(response.data)
    }

    useEffect(() => {
        setDisplayMessage("")
        if(userState === 'ACTIVE' && accessToken){
            setDisplayMessage("Already Logged In!")
            setTimeout(() => {
                setDisplayMessage("");
                navigate('/dashboard')
            }, 1000)
        }
        getColleges();
        getCourses();
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
                    : <SignUp email={userResp.email} colleges={collegeList} courses={courseList}/>): "" }
                </div>
                
           </div>
        </>
    )
}