import React from 'react'
import List from './List'
import DropDownMenu from './DropDownMenu'
import Hamburger from './Hamburger'

export default function Nav() {
    const dropDownContents =[
        {link:"/alphabet", content:"Learn The Alphabet"},
        {link:"/survival-korean", content:"Survival Korean"},
    ]
    return (
        <>
            <Hamburger />
            <nav className='fullsize-nav'>
                <ul>
                    <List link="/" content="Home"/>
                    <DropDownMenu 
                        link="/alphabet"
                        content="Start Learning"
                        dropDownContents={dropDownContents}
                    />
                    <List link="/grammar" content="Grammar"/>
                    <List link="/about" content="About"/>
                </ul>
                
                <div class="hamburger-icon" id="hamburger-icon">
                    <div></div>
                </div>
            </nav>
        </>
    )
}
