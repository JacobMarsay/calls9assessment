import React, { Component } from 'react';
import './Informationbar.css';

const bannerIcon = require('./baseline-web-24px.png');

class Informationbar extends Component {
    render() {
        return(
            <section className='find__out__more'>
                <img className='icon' src={bannerIcon} alt="Icon"/>
                <p>Find out more at <a href="https://www.people.com">www.people.com</a></p>
            </section>
        );
    }
}

export default Informationbar;