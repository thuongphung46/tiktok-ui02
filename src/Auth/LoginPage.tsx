import React, { useState } from "react";
import '~/Auth/styles.css';
import '~/accsets/images/Banner-login.png';
import { onLogin } from "./api";

const LoginPage =()=>
{
    const adminUser={
        email:"thuongphung46@gmail.com",
        password:"123"
    }
    const [user, setUser]= useState ({name:"",email:""})
    const [error, setError] = useState("");

    const Logout=()=>{
        console.log("logout");
    }
    return(
        <div className="bg-img">
            <form  className="container-login">
                <h1>Login</h1>

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" value={"email"} />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" value={"password"} />

                    <button type="submit" className="btn">Login</button>
                    {error.length > 0 && <p>{error}</p>}
            </form>
        </div>
    
    )
}
export default LoginPage;