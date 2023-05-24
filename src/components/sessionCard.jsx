/* eslint-disable react/prop-types */
import { useNavigate } from "react-router"
import { useSession } from "../context/session-context";
import { useUser } from "../context/user-context";

export default function SessionCard(props){
    
    const {sessionStream, setSessionStream} = useSession();
    const {userObj, setUserObj} = useUser();
    const navigate = useNavigate();

    const logAttendance = async (userInfo, sessionInfo) => {

        var date = new Date();
        var currentDate = date.toLocaleDateString("en-GB");
        var currentTime = date.toLocaleTimeString("en-US");
        var attendanceObj = {
            email: userInfo ? userInfo.email : localStorage.getItem("email"),
            course: userInfo ? userInfo.course : localStorage.getItem("course"),
            college: userInfo ? userInfo.college : localStorage.getItem("college"),
            sessionId: sessionInfo._id,
            sessionTitle: sessionInfo.title,
            userJoinedAt: currentDate + " " + currentTime,
        }

        var response = await fetch("https://seminarroom.in/api/api/attendance", {
                method: "POST",
                body: JSON.stringify(attendanceObj),
                headers: {
                    "Content-Type": "application/json",
                  },
            }).then(result => result.json())
    }

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
                { props.sessionData.feedbackEnabled === true ? (<a style={{textDecoration: "none"}} className="action-button-primary" target="_blank" rel="noreferrer" onClick={() => {navigate(`/feedback/${props.sessionData.feedbackURL}`)}}>Feedback</a>) : (<button className="action-button-primary" onClick={() => {
                    logAttendance(userObj, props.sessionData);
                    setSessionStream(props.sessionData)
                    navigate(`/session/${props.sessionData.sessionURL}`)
                }}>Join Session</button>)}
                { props.sessionData.innovationChallengeEnabled === true ? (<a style={{textDecoration: "none"}} className="action-button-primary" target="_blank" rel="noreferrer" onClick={() => {navigate(`/innovation-challenge/${props.sessionData.innovationChallengeURL}`)}}>Innovation Challenge</a>) : <div></div>}
                <div className="session-schedule">{props.sessionData.sessionDate}, {props.sessionData.sessionTime}</div>
            </div>
        </div>
    )
}