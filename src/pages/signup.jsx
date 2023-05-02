import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SingupPage(){
    const [status,setStatus] = useState("")
    const navigate = useNavigate()
    const submitForm = (event) =>{
        event.preventDefault()
        const form = new FormData(event.currentTarget)
        const data = Object.fromEntries(form.entries())
        fetch("http://localhost:8000/signup",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
        .then(res=>{
            if(res.status==400){
                setStatus("Try again")
            }
            else res.json()
            .then((res)=>{
                if(res.success){
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
                <h1>signup form</h1>
                <label>Username:</label><input name="username" type="text"/><br/>
                <label>Password:</label><input name="password" type="password"/><br/>
                <button type="submit">Submit</button>
                <h3>{status}</h3>
            </form>
        </div>
        </>
    )
}