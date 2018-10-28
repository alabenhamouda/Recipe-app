import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

export default class Recipe extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        instrctions: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
    }
    render() {
        const {title, img, instructions} = this.props;
        const ingredients = this.props.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
        ))
        return (
            <div className="recipe">
                <img src={img} alt={title}/>
                <div className="content">
                    <h2>{title}</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        {ingredients}
                    </ul>
                    <h3>Instructions:</h3>
                    <p>{instructions}</p>
                </div>
            </div>
            
        )
    }
}