import React, { Component } from 'react';
import { Posts } from './Posts';
import './Blog.css';

class Blogs extends Component {
    render() {
        return(
            <section className='news'>
                <div className='blog__heading'>
                    <h1>News</h1>
                </div>
                <div className='card'>
                    {Posts.map((item, index) => {
                        return(
                            <div className='card__content' key={index}>
                                <img src={item.image} alt={item.alt}></img>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                                <div className='tags'>
                                    <small>{item.tag1}</small>
                                </div>
                                <div className='tags'>
                                    <small>{item.tag2}</small>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        );
    }
}

export default Blogs;