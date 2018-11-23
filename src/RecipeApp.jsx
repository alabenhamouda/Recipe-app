import React, { Component } from "react";
import "./RecipeApp.css";
import RecipeList from "./RecipeList";
import Navbar from "./Navbar";
import Form from "./Form";

export default class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false,
      idCount: 4,
      recipes: [
        {
          id: 1,
          title: "Spaguett",
          ingredients: ["spaguet", "sauce"],
          img: "https://i.imgur.com/HNQ0QZz.png",
          instructions: "Make a spaguet then eat it."
        },
        {
          id: 2,
          title: "Lasagna",
          img:
            "https://www.tasteofhome.com/wp-content/uploads/2018/01/Best-Lasagna_exps36333__TH133086D07_23_6b_RMS-1-696x696.jpg",
          ingredients: [
            "9 lasagna noodles",
            "3/4 pound ground beef",
            "1 medium onion, diced"
          ],
          instructions:
            "Cook noodles according to package directions; drain. Meanwhile, in a Dutch oven, cook sausage, beef and onion over medium heat 8-10 minutes or until meat is no longer pink, breaking up meat into crumbles. Add garlic; cook 1 minute. Drain."
        },
        {
          id: 3,
          img:
            "https://images.media-allrecipes.com/userphotos/720x405/4684123.jpg",
          title: "soup",
          ingredients: ["3 tablespoons butter", "1 large onion, diced"],
          instructions: "just don't do soup, testes like shit lol."
        },
        {
          id: 4,
          img:
            "https://images.media-allrecipes.com/userphotos/720x405/4684123.jpg",
          title: "soup",
          ingredients: ["3 tablespoons butter", "1 large onion, diced"],
          instructions: "just don't do soup, testes like shit lol."
        }
      ]
    };
    this.displayForm = this.displayForm.bind(this);
  }
  displayForm(display) {
    this.setState({ displayForm: display });
  }
  render() {
    return [
      <header>
        <Navbar
          displayForm={this.displayForm}
          formState={this.state.displayForm}
        />
      </header>,
      <Form
        addRecipe={(recipe, idCount) => {
          this.setState(st => ({
            recipes: [...st.recipes, recipe],
            displayForm: false,
            idCount
          }));
        }}
        style={
          this.state.displayForm ? { display: "flex" } : { display: "none" }
        }
        displayForm={this.displayForm}
        idCount={this.state.idCount}
      />,
      <RecipeList
        recipes={this.state.recipes}
        deleteRecipe={key => {
          let newList = this.state.recipes.filter(r => r.id !== key);
          this.setState({ recipes: newList });
        }}
      />
    ];
  }
}
