import React, { Component } from "react";
import "./RecipeList.css";
import Recipe from "./Recipe";

export default class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: "Spaguett",
        ingredients: ["spaguet", "sauce"],
        img: "https://i.imgur.com/HNQ0QZz.png",
        instructions: "Make a spaguet then eat it."
      }
    ]
  };
  render() {
    return (
      <div className="recipe-list">
        {this.props.recipes.map(r => (
          <Recipe key={r.id} {...r} deleteRecipe={this.props.deleteRecipe} />
        ))}
      </div>
    );
  }
}
