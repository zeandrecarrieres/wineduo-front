
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Avatar from '../assets/avatar.png'
import './navbar.css'


function Navbar() {
    return (
        <div className='navbar'>
            <img src={Logo} alt="logo" className="logo"/>  
                <li><Link to="/wine_register" className="item-menu">Register Wines</Link></li>
                <li><Link to="/wine_list"  className="item-menu">List Wines</Link></li>
                        <img src={Avatar} alt="logo" className="avatar" />  
        </div>
    )
}

export default Navbar
