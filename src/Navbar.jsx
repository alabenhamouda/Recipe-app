import React, {Component} from 'react';
import './Navbar.css';

export default class Navbar extends Component {
    render(){
        return (
            <nav>
                <a href="#" className="logo">Recipe App</a>
                <ul>
                    <li><a href="#">New Recipe</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        )
    }
}