import React from 'react'
import Nav from './Nav'
export default function Header() {
    return (
        
        <header>
            <a href="/">
                <img src="logo.png" width="auto" height="50" atl="logo" className="logo" />
            </a>
            <Nav />
        </header>
        
    )
}
