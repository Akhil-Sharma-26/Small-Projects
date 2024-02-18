import React from "react";
import UserContext from "./userContext";

const UserContextProvider = ({children}) => {
    const [user,setUser] = React.useState(null) // Do the api calls here and send the values to the Provider
    // user -> state var,
    // setUser -> Method
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider