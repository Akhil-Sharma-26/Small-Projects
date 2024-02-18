import { useState } from 'react'
import { InputBox, Navbar, Header, Footer } from './components'
import useCurrencyInfo from './hooks/UserCurrencyInfo.js'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Currency_Converter from './Pages/Currency_Converter.jsx';
import HomePage from './Pages/Home_Page.jsx';
import UserContextProvider from './context/UserContextProvider.jsx';
import { ThemeProvider } from './context/Theme.js';
function App() {
    return (
        <>  
            <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
            <UserContextProvider>
                <Header />
                    <Outlet />
                <Footer />
            </UserContextProvider>
            </ThemeProvider>
        </>
    );
}

export default App