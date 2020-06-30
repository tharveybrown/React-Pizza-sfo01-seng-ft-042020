import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";

const API = "http://localhost:3000/pizzas";
class App extends Component {
  constructor() {
    super();
    this.state = {
      pizzas: [],
      editedPizza: {},
    };
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((obj) =>
        this.setState({
          pizzas: obj,
        })
      );
  }

  handleEdit = (pizza) => {
    this.setState({
      editedPizza: pizza,
    });
  };

  handleInputChange = (e) => {
    const target = e.target;
    let value = e.target.value;
    if (value === "Vegetarian") {
      value = target.checked;
    } else if (value === "Not Vegetarian") {
      value = !target.checked;
    }
    let editedPizza = { ...this.state.editedPizza };
    editedPizza[target.name] = value;
    this.setState({ editedPizza });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.editedPizza);
    fetch(`${API}/${this.state.editedPizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.editedPizza),
    })
      .then((res) => {
        this.setState({
          editedPizza: {},
        });
      })
      .catch((err) => err);
  };

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          pizza={this.state.editedPizza}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
        <PizzaList pizzas={this.state.pizzas} handleEdit={this.handleEdit} />
      </Fragment>
    );
  }
}

export default App;
