import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import logo from './Logo.png';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return(
            <nav>
                <div className="nav">
                    <img className='logo' src={logo} alt="Website Logo" />
                    <ul className='nav__links'>
                        {MenuItems.map((item, index) => {
                            return(
                                <li key={index}>
                                    <a className='nav__link' href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;