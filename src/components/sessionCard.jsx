/* eslint-disable react/prop-types */
import { useNavigate } from "react-router"
import { useSession } from "../context/session-context";

export default function SessionCard(props){
    
    const {sessionStream, setSessionStream} = useSession();
    const navigate = useNavigate();

    return(
        <div className="session-card-container">
            <div className="session-title">{props.sessionData.title}</div>
            <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                <div className="session-course">{props.sessionData.course}</div>
                <div className="session-course">{props.sessionData.subject}</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <div className="session-speaker">{props.sessionData.speaker.name}</div>
                <div className="session-speaker-sub">{props.sessionData.speaker.designation}, {props.sessionData.speaker.company}</div>
            </div>
            <div className="session-prob">{props.sessionData.problemStatement}</div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <button className="action-button-primary" onClick={() => {
                    setSessionStream(props.sessionData)
                    navigate(`/session/${props.sessionData.sessionURL}`)
                }}>Join Session</button>
                <div className="session-schedule">{props.sessionData.sessionDate}, {props.sessionData.sessionTime}</div>
            </div>
        </div>
    )
}