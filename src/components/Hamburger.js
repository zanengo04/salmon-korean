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
                <Link to="#" className='menu-bars'>
                    <FaBars onClick={showSidebar}/>
                </Link>
                <nav className={sidebar ? 'hamburger-active' : "hamburger-inactive"}>
                    <ul className='hamburger-items'>
                        <li className='hamburger-toggle'>
                            <Link to="#" className='menu-bars'>
                                <AiFillCloseSquare onClick={showSidebar}/>
                            </Link>
                        </li>
                        <li className='hamburger-text'><Link to='/'>Home</Link></li>
                        <li className='hamburger-text'><Link to='/alphabet'><span>Learn The Alphabet</span></Link></li>
                        <li className='hamburger-text'><Link to='/survival-korean'><span>Survival Korea</span></Link></li>
                        <li className='hamburger-text'><Link to='/grammar'><span>Grammar</span></Link></li>
                        <li className='hamburger-text'><Link to='/about'><span>About</span></Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
