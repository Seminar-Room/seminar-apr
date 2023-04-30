import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function LoginPage(){
    const [status,setStatus] = useState("")
    const navigate = useNavigate()
    const submitForm = (event) =>{
        event.preventDefault()
        const form = new FormData(event.currentTarget)
        const data = Object.fromEntries(form.entries())
        fetch("http://localhost:8000/login",{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res=>{
            if(res.status==400){
                setStatus("Try again")
            }
            else res.json()
            .then((res)=>{
                if(res.success){
                    localStorage.setItem("accessToken",res.accessToken)
                    localStorage.setItem("refreshToken",res.refreshToken)
                    navigate("/dashboard")
                }
                else{
                    setStatus("Wrong Password")
                }
            })
        })
    }

    return(
        <>
        <div id="login-form">
            <form onSubmit={submitForm}>
                <label>Username:</label><input name="username" type="text"/><br/>
                <label>Password:</label><input name="password" type="password"/><br/>
                <button type="submit">Submit</button>
                <h3>{status}</h3>
            </form>
        </div>
        </>
    )
}