// New syntax for setting up context

import React,{createContext,useContext} from "react";

export const ThemeContext = React.createContext({
    themeMode: "light", // Variable
    darkTheme: ()=>{}, // Method
    lightTheme: ()=>{},
});

export const ThemeProvider = ThemeContext.Provider

export default function customUseTheme(){
    return useContext(ThemeContext)
} // taaki 2-3 bar har jagh import na krna pade.