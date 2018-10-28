import React, {Component} from 'react';
import './RecipeApp.css';
import Recipe from './Recipe';

export default class RecipeApp extends Component {
    render() {
        return (
            <div>
                <Recipe
                title="Spaguett" 
                ingredients={['spaguet', 'sauce']}
                img="https://i.imgur.com/HNQ0QZz.png"
                instructions="Make a spaguet then eat it."
                />
            </div>
        )
    }
}