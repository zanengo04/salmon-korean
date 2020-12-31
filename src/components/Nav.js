import React from 'react'
import List from './List'
import DropDownMenu from './DropDownMenu'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'

export default function Nav() {
    const dropDownContents =[
        {link:"/alphabet", content:"Learn The Alphabet"},
        {link:"/survival-korean", content:"Survival Korean"},
    ]
    return (
        <nav>
            <ul>
                <List link="/" content="Home"/>
                <DropDownMenu 
                    link="/alphabet"
                    content="Start Learning"
                    dropDownContents={dropDownContents}
                />
                <List link="/grammar" content="Grammar"/>
                <List link="/about" content="About"/>
                <LoginButton />
                <LogoutButton />
                <Profile />
            </ul>
            
            <div class="hamburger-icon" id="hamburger-icon">
                <div></div>
            </div>
        </nav>
    )
}
