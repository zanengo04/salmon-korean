import React from 'react'
import {Link} from 'react-router-dom'

import List from './List'

export default function DropDownMenu({link, content, dropDownContents}) {
    return (
        <li className="listHover"><Link to ={link}>{content}</Link>
            <ul className='dropMenu'>
                {dropDownContents.map(contents => <List link={contents.link} content={contents.content}/>
                )}
                
            </ul>
        </li>
    )
}
