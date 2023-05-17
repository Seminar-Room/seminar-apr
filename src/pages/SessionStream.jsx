import { useSession } from "../context/session-context";
import logo from "../assets/logo.png"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import SessionCard from "../components/sessionCard";

export default function SessionStream(){
    const {sessionStream, setSessionStream} = useSession();
    var userState = localStorage.getItem("userState") ? localStorage.getItem("userState") : null;
    var accessToken = localStorage.getItem("accessToken") ? localStorage.getItem("accessToken") : null;
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        async function fetchStream(streamId){
            var response = await fetch("https://seminarroom.in/api/api/get-stream-session", {
                method: "POST",
                body: JSON.stringify({sessionURL: streamId}),
                headers: {
                    "Content-Type": "application/json",
                  },
            }).then(result => result.json())
        if(response._id){
            setSessionStream(response);
        }
        }
        fetchStream(id);
    }, [])

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
                    <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', gap: '1rem', marginTop: "2rem"}}>
                        <div style={{display: 'flex',justifyContent: 'center', alignItems: 'center', width: '500px'}}>
                            { sessionStream._id ? (
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <div className="session-card-container">
                                <div className="session-title" style={{fontSize: '1rem'}}>{sessionStream && sessionStream.title}</div>
                                <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                                    <div className="session-course">{sessionStream && sessionStream.course}</div>
                                    <div className="session-course">{sessionStream && sessionStream.subject}</div>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                                    <div className="session-speaker">{sessionStream && sessionStream.speaker && sessionStream.speaker.name}</div>
                                    <div className="session-speaker-sub">{sessionStream && sessionStream.speaker && sessionStream.speaker.designation}, {sessionStream && sessionStream.speaker &&  sessionStream.speaker.company}</div>
                                </div>
                                { sessionStream.feedbackEnabled ? (<a style={{textDecoration: "none"}} className="action-button-primary" target="_blank" rel="noreferrer" href={sessionStream.feedbackURL}>Feedback</a>) : <div></div>}
                            </div>
                            <a className="action-button-primary" target="_blank" rel="noreferrer" href={sessionStream.vevoxURL} style={{textDecoration: 'none'}}>Vevox Chat</a>
                            </div>
                            ) :( <div className="alert alert-info">
                            <div className="alert-message information">Loading Session Info...</div>
                        </div>)}
                        </div>
                        <div className="stream-container">
                            <div style={{marginTop: '2rem'}}>
                                <iframe width="600" height="337" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                            </div>
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