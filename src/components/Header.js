import React from 'react'
import './Header.css'
import Logo from './../assets/savety.png'

export default function Header() {
    return (
        <nav className="header">
            <img src={Logo} width="120wh" alt="Savety Logo"></img>
        </nav>
    )
}
