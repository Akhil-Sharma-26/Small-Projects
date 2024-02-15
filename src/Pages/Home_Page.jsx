import { useState } from 'react'
import { InputBox } from '../components/index.js'
import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <>
            <div className='
                text-3xl
                font-bold
                text-center
                p-5
            '>
                HEllo! Use the following links to access my projects.
            </div>
            <p className='
                text-center
                text-2xl
                font-bold
                p-5
            '>
                I am currently Putting more projects into this site!.
            </p>
            <div className='text-center'>
                <button className='
                bg-blue-500
                hover:bg-blue-700
                text-white
                font-bold
                py-2
                px-4
                rounded
                text-center
            '>
                    <Link to='/currency-converter' className='
                    text-white
                    font-bold
                    text-center
                '>
                        Currency-Coverter!!
                    </Link>
                </button>
            </div>
        </>
    )
}