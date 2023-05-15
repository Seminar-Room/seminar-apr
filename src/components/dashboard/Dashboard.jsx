import { useEffect, useState } from "react";
import "./dashboard.css"
import logo from "../../assets/logo.png"
import SessionCard from "../sessionCard";

export default function Dashboard(){

    const [sessionList, setSessionList] = useState([]);
    var userState = localStorage.getItem("userState") ? localStorage.getItem("userState") : null;
    var accessToken = localStorage.getItem("accessToken") ? localStorage.getItem("accessToken") : null;
    
    useEffect(() => {
         async function fetchSessions(){
            var response = await fetch("http://localhost:5000/api/get-sessions", {
                method: "POST",
                body: JSON.stringify({token: localStorage.getItem("accessToken")}),
                headers: {
                    "Content-Type": "application/json",
                  },
            }).then(result => result.json())
            
            if(response.success === true){
                setSessionList(response.data)
            }
        }
        fetchSessions();
    }, [])

    return(
        <div className="dashboard-container">
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
                {
                    sessionList.length != 0 ? (
                        <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                            {  userState === 'ACTIVE' && accessToken ? (
                                sessionList && sessionList.map(sessionItem => {
                                    return (
                                        <SessionCard key={sessionItem._id} sessionData={sessionItem} />
                                    )
                                })) : (<div style={{display: 'flex', justifyContent: 'center'}}>
                                <div className="alert alert-info">
                                    <div className="alert-message information" style={{textAlign: 'center'}}>
                                        <div>You need to login to access this content.</div>
                                        <a href="/login" className="login-redirect">Click here</a> to login.
                                    </div>
                                </div>
                            </div>)
                            }
                        </div>
                ) : (
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className="alert alert-info">
                            <div className="alert-message information">Loading Available Sessions...</div>
                        </div>
                    </div>
                )

                }

                
        </div>
    )
}