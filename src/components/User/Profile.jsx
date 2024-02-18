import React,{useContext,useState} from "react";
import UserContext from "../../context/userContext";
export default function Profile(){
    const {user}=useContext(UserContext)
    if(!user){
        return (
            <div>
                Brother Please Login!!
            </div>
        )
    }
    console.log(user);
    return (
        <div>
            Welcome {user.usernmae} !!
        </div>
    )
}