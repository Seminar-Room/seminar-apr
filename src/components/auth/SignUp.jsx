/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMessage } from "../../context/message-context";
import "./auth.css"

export default function SignUp(props){
    const navigate = useNavigate();
    var {displayMessage, setDisplayMessage} = useMessage("");
    const [userData, setUserData] = useState({
        name: "",
        email: props.email,
        phoneNumber: "",
        college: "",
        course: "",
        semester: "",
        password: "",
    });

    const handleFormChange = (evt) => {
        const value = evt.target.value;
        setUserData({
          ...userData,
          [evt.target.name]: value
        });
      }

    const signUpUser = async (userInfo) => {
        var response = await fetch("http://localhost:5000/api/sign-up", {
            method: "POST",
            body: JSON.stringify(userInfo),
            headers: {
                "Content-Type": "application/json",
              },
        }).then(result => result.json());
        setDisplayMessage(response.message)
        if(response.success === true){
            if(response.data){
                localStorage.setItem("accessToken", response.data.accessToken)
                localStorage.setItem("username", response.data.name)
                localStorage.setItem("userState", 'ACTIVE')
            }
            setTimeout(() => {
                setDisplayMessage("");
                navigate("/dashboard")
            }, 1000)
           
        }
    }

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className="sign-up-container">
                <div className="auth-input-container">
                    <div className="auth-input-label">Name:</div>
                    <input className="auth-input" name="name"  type="text" onChange={handleFormChange} />
                </div>
                <div className="auth-input-container">
                    <div className="auth-input-label">Phone No:</div>
                    <input className="auth-input" name="phoneNumber"  type="text" onChange={handleFormChange} />
                </div>
                <div className="auth-input-container">
                    <div className="auth-input-label">College:</div>
                    <input className="auth-input" name="college"  type="text" onChange={handleFormChange} />
                </div>
                <div className="auth-input-container">
                    <div className="auth-input-label">Course:</div>
                    <input className="auth-input" name="course"  type="text" onChange={handleFormChange} />
                </div>
                <div className="auth-input-container">
                    <div className="auth-input-label">Semester:</div>
                    <input className="auth-input" name="semester"  type="text" onChange={handleFormChange} />
                </div>
                <div className="auth-input-container">
                    <div className="auth-input-label">Password:</div>
                    <input className="auth-input" name="password"  type="text" onChange={handleFormChange} />
                </div>
                
            </div>
            <button style={{height: "fit-content"}} className="action-button-primary" onClick={() => {
                    signUpUser(userData);
                } }>Sign Up</button>
        </div>
    )
}