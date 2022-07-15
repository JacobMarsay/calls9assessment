import React, { Component } from 'react';
import { FooterItems } from './FooterMenu';
import './Footer.css';

class Footer extends Component {
    render() {
        return(
            <nav>
                <ul className='footer__nav'>
                    {FooterItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className='footer__link' href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default Footer;