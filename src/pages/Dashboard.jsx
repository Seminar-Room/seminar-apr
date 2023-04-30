import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function Dashboard(){
    const [username,setUsername] = useState("")

    const generateAccessToken = ()=>{
        fetch("http://localhost:8000/token",{
            method:"POST",
            body: JSON.stringify({token:localStorage.getItem("refreshToken")}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then((res)=>{
            if(res.status==401 || res.status==403) navigate("/login")
            else res.json().then(res=>{
                localStorage.setItem("accessToken",res.token)
                fetchUser()
            })
        })
    }

    const fetchUser = ()=>{
        fetch("http://localhost:6030/user/",{
            headers:{Authentication:"Bearer "+localStorage.getItem('accessToken')}
        })
        .then(res=>{
            if(res.status==401){
                navigate("/login")
            }
            else if(res.status==403){
                generateAccessToken()
            }
            else res.json().then(res=>{
                setUsername(res.name)
            })
        })
    }

    const navigate = useNavigate()
    useEffect(fetchUser)

    const logoutHandler = ()=>{
        fetch("http://localhost:8000/logout",{
            method:"DELETE",
            headers:{
                Authentication: localStorage.getItem("refreshToken")
            }
        })
        .then(res=>{
            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")
            navigate("/login")
        })
    }
    return(
        <>
        <h1>Welcome to Dashboard Page {username}</h1>
        <button onClick={logoutHandler}>Logout</button>
        </>
    )
}