import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.idCount + 1,
      title: "",
      instructions: "",
      ingredients: [""],
      img: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.changeIng = this.changeIng.bind(this);
    this.addIng = this.addIng.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  changeIng(i) {
    return e => {
      let ings = this.state.ingredients.slice();
      ings[i] = e.target.value;
      this.setState({ ingredients: ings });
    };
  }
  addIng() {
    this.setState(state => ({ ingredients: [...state.ingredients, ""] }));
  }
  submit(e) {
    let { id } = this.state;
    e.preventDefault();
    this.props.addRecipe(this.state, id);
    this.setState({
      id: id + 1,
      title: "",
      instructions: "",
      ingredients: [""],
      img: ""
    });
  }
  render() {
    let ingredients = this.state.ingredients.map((ing, i) => (
      <input
        type="text"
        value={ing}
        placeholder="Ingredient"
        key={i}
        onChange={this.changeIng(i)}
      />
    ));
    let { title, instructions, img } = this.state;
    return (
      <form onSubmit={this.submit} style={this.props.style}>
        <button
          type="button"
          onClick={e => {
            this.props.displayForm(false);
          }}
        >
          X
        </button>
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={this.handleChange}
          value={title}
        />
        <textarea
          name="instructions"
          placeholder="Instructions"
          cols="30"
          rows="10"
          onChange={this.handleChange}
          value={instructions}
        />
        {ingredients}
        <button type="button" onClick={this.addIng}>
          +
        </button>
        <input
          type="text"
          placeholder="img URL"
          name="img"
          onChange={this.handleChange}
          value={img}
        />
        <button type="submit">SAVE</button>
      </form>
    );
  }
}
