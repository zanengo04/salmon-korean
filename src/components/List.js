import React from 'react'

import {Link} from 'react-router-dom'

export default function List(props) {
    return (
        <li><Link to={props.link}>{props.content}</Link></li>
    )
}
