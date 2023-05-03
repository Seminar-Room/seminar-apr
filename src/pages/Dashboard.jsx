import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function Dashboard(){
    const [username,setUsername] = useState("")

    const fetchUser = ()=>{
        fetch("http://localhost:8000/user/",{
            method:"GET",
            credentials:"include"
        })
        .then(res=>{
            if(res.status==401 || res.status==403) navigate('/login')
            else{
                res.json()
                .then(res=>{
                    setUsername(res)
                })
            }
        })
    }

    const navigate = useNavigate()
    useEffect(fetchUser)

    return(
        <>
        <h1>Welcome to Dashboard Page {username}</h1>
        </>
    )
}