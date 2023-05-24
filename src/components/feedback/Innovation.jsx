import { Navigate, useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/logo.png"
import './feedback.css'
import { useEffect } from "react";
export default function Innovation(){
    const {id} = useParams();
    const navigate = useNavigate();
    
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
                    <div className="feedback-title">Innovation Challenge</div>
                    <iframe src={`https://docs.google.com/forms/d/e/${id}/viewform?embedded=true`} width="640" height="1000" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                </div>
            </div>
        </div>
    )
}