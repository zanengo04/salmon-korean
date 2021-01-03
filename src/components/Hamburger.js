import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import { FaBars } from "react-icons/fa";
import { AiFillCloseSquare } from "react-icons/ai";
export default function Hamburger() {
    const [sidebar,setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <div className ="hamburger">
                <Link to="#" className='hamburger-icon'>
                    <FaBars onClick={showSidebar}/>
                </Link>
                <nav className={sidebar ? 'hamburger-active' : "hamburger-inactive"}>
                    <ul className='hamburger-items'>
                        <li className='hamburger-toggle'>
                            <Link to="#" className='close-icon'>
                                <AiFillCloseSquare onClick={showSidebar}/>
                            </Link>
                        </li>
                        <li className='hamburger-text'><Link to='/' onClick={showSidebar}>Home</Link></li>
                        <li className='hamburger-text'><Link to='/alphabet' onClick={showSidebar}><span>Learn The Alphabet</span></Link></li>
                        <li className='hamburger-text'><Link to='/survival-korean' onClick={showSidebar}><span>Survival Korea</span></Link></li>
                        <li className='hamburger-text'><Link to='/grammar' onClick={showSidebar}><span>Grammar</span></Link></li>
                        <li className='hamburger-text'><Link to='/about' onClick={showSidebar}><span>About</span></Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
