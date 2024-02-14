import { useState } from 'react'
import { InputBox, Navbar } from './components'
import useCurrencyInfo from './hooks/UserCurrencyInfo.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Currency_Converter from './Pages/Currency_Converter.jsx';
function App() {
    return (
        <>
        <Navbar/>
        <BrowserRouter>
            <Routes>
            <Route path="/currency-converter" element={<Currency_Converter />} />
            </Routes>
        </BrowserRouter>
        </>

    );
}

export default App