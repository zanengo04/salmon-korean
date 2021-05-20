import React from 'react'
import {Link} from 'react-router-dom'

import Nav from './Nav'

export default function Header() {
    return (
        
        <header>
            <Link to="/">
                <img src="logo.png" width="auto" height="50" alt="logo" className="logo"/>
            </Link>
            <Nav />
        </header>
        
    )
}
