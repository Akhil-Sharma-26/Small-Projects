import React, {useState, useContext} from "react";
import UserContext from "../../context/userContext";
export default function Login(){
    const [username,setusername] =useState('')
    const [pass,setpass] =useState('')
    
// context: Comes from Provider
    const {setUser} = useContext(UserContext)


    function handleit(e){
        e.preventDefault()
        setUser({username,pass})
    }
    return(
        <div>
            <h2>
                Login
            </h2>
            <input value={username} onChange={(e)=>setusername(e.target.value)} type="text" placeholder="Username"/>
            <input value={pass} onChange={(e)=>setpass(e.target.value)} type="text" placeholder="password"/>
            <button onClick={handleit}>Submit</button>
        </div>
    )
}