import { useState } from 'react'
import { InputBox, Navbar, Header, Footer } from './components'
import useCurrencyInfo from './hooks/UserCurrencyInfo.js'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Currency_Converter from './Pages/Currency_Converter.jsx';
import HomePage from './Pages/Home_Page.jsx';
function App() {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    );
}

export default App