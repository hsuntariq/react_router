import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div style={{
                display: 'flex'
            }} className="">

                <Link to="/home">home</Link>
                <Link to="/about">About</Link>
                <Link to="/sign-up">Sign Up</Link>
                <Link to="/log-in">Login</Link>
            </div>
        </>
    )
}

export default Nav