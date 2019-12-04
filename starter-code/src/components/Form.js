import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    calories: "",
    image: ""
  };

  //   Para poner
//   handleInput = e => {
//     let { name, calories, image } = e.target;

//     this.setState({ [name]: value });
//   };


handleNameInput = e => {
    const name = e.target.value;
    this.setState({ name });
  };

  handleCaloriesInput = e => {
    const calories = e.target.value;
    this.setState({ calories });
  };


  handleImageInput = e => {
    const image = e.target.value;
    this.setState({ image });
  };

  addForm = event => {
    event.preventDefault();
    // const name = event.target.name;

    this.props.addOneFood(this.state);

    this.setState({
      name: "",
      calories: "",
      image: ""
    });
  };

  render() {
    return (
      <div>
        <form className="form-add">
          <input
            type="text"
            placeholder="name of food"
            name="name"
            value={this.state.name}
            onChange={this.handleNameInput}
          />
          <input
            type="text"
            placeholder="calories"
            name="calories"
            value={this.state.calories}
            onChange={this.handleCaloriesInput}
          />
          <input
            type="text"
            placeholder="name of image"
            name="image"
            value={this.state.image}
            onChange={this.handleImageInput}
          />
          <button onClick={this.addForm}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
