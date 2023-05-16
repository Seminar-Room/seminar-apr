/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMessage } from "../../context/message-context";
import "./auth.css"

export default function SignUp(props){
    const navigate = useNavigate();
    var {setDisplayMessage} = useMessage("");
    const [collegeList, setCollegeList] = useState(props.colleges);
    const [courseList, setCourseList] = useState(props.courses);
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
        setDisplayMessage("Signing you up...")
        var response = await fetch("http://seminarroom.in:5000/api/sign-up", {
            method: "POST",
            body: JSON.stringify(userInfo),
            headers: {
                "Content-Type": "application/json",
              },
        }).then(result => result.json());
        
        if(response.success === true){
            setDisplayMessage(response.message)
            if(response.data){
                localStorage.setItem("accessToken", response.data.accessToken)
                localStorage.setItem("username", response.data.name)
                localStorage.setItem("userState", 'ACTIVE')
                localStorage.setItem("college", response.data.college)
                localStorage.setItem("course", response.data.course)
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
                    <select className="auth-input" id="colleges" name="college" onChange={handleFormChange}>
                        <option hidden default>Select</option>
                        { collegeList && collegeList.map(college => {
                            return (
                                <option value={college.name} key={college._id}>{college.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="auth-input-container">
                    <div className="auth-input-label">Course:</div>
                    <select className="auth-input" id="courses" name="course" onChange={handleFormChange} style={{width: '100%', paddingLeft:'1rem'}}>
                        <option hidden default>Select</option>
                        { courseList && courseList.map(course => {
                            return (
                                <option value={course.name} key={course._id}>{course.name}</option>
                            )
                        })}
                    </select>
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