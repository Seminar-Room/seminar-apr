import { useSession } from "../context/session-context";
import logo from "../assets/logo.png"
import { useParams } from "react-router-dom";

export default function SessionStream(){
    const {sessionStream, setSessionStream} = useSession();
    var userState = localStorage.getItem("userState") ? localStorage.getItem("userState") : null;
    var accessToken = localStorage.getItem("accessToken") ? localStorage.getItem("accessToken") : null;
    const {id} = useParams();
    return (
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
            {
                userState === 'ACTIVE' && accessToken ? (
                    <div className="stream-container">
                        <div className="session-title">{sessionStream.subject}</div>
                        <div style={{marginTop: '2rem'}}>
                            <iframe width="896" height="504" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                ) : (<div style={{display: 'flex', justifyContent: 'center'}}>
                <div className="alert alert-info">
                    <div className="alert-message information" style={{textAlign: 'center'}}>
                        <div>You need to login to access this content.</div>
                        <a href="/login" className="login-redirect">Click here</a> to login.
                    </div>
                </div>
            </div>)
            }
            
        </div>
    )
}