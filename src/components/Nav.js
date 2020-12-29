import React from 'react'
import List from './List'
import DropDownMenu from './DropDownMenu'


export default function Nav() {
    const dropDownContents =[
        {link:"https://zanengo04.github.io/salmon-korean/#/alphabet", content:"Learn The Alphabet"},
        {link:"https://zanengo04.github.io/salmon-korean/#/survival-korean", content:"Survival Korean"},
    ]
    const dropDownContents2 =[
        {link:"https://zanengo04.github.io/salmon-korean/#/typing-hangeul", content:"Hangeul"},
        {link:"https://zanengo04.github.io/salmon-korean/#/typing", content:"Paragraph"},
    ]
    return (
        <nav>
            <ul>
                <List link="https://zanengo04.github.io/salmon-korean/#/" content="Home"/>
                <DropDownMenu 
                    link="/alphabet"
                    content="Start Learning"
                    dropDownContents={dropDownContents}
                />
                <List link="https://zanengo04.github.io/salmon-korean/#/grammar" content="Grammar"/>
                <DropDownMenu 
                    link="#"
                    content="Typing Practice"
                    dropDownContents={dropDownContents2}
                />
                <List link="https://zanengo04.github.io/salmon-korean/#/about" content="About"/>
                <List link="https://zanengo04.github.io/salmon-korean/#/register" content="Sign up"/>
                <List link="https://zanengo04.github.io/salmon-korean/#/login" content="Log In"/>
            </ul>
            
            <div class="hamburger-icon" id="hamburger-icon">
                <div></div>
            </div>
        </nav>
    )
}
