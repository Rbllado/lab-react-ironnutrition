import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FoodBox from "./components/FoodBox";
import foods from "./foods.json";
import Form from "./components/Form";
import SearchBar from "./components/SearchBar";


class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods,
      showForm: true,
      filtered: foods,
    };
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  }
  

  // addForm = e => {
  //   e.preventDefault();
  // };

  addFood = (foodObj) =>{
    const updateFood = [foodObj, ...this.state.foods];

    this.setState({foods: updateFood});
  }

  filterFood = input => {
    const filtered = this.state.foods.filter(el =>
      el.name.toLowerCase().includes(input.toLowerCase())
    );
    this.setState({ filtered });
  }

  render() {
    return (
      <div>
        {/* This is to take all the values from the array. */}
        
        
        
        <button onClick={this.toggleForm} className="button-add">Show form</button>
        {
        this.state.showForm ?
        <Form addOneFood={this.addFood}/>
        :
        null
      }


      {/* Aqui llama a la funcion filterFood y actualiza su valor */}
      
      <SearchBar filterFood={this.filterFood} />

      <div>
          <div style={{ width: "70%", float: "left" }}>
            {this.state.filtered.map((el, i) => (
              <FoodBox key={i} food={el}  />
            ))}
        </div>
        </div>




        {/* {this.state.foods.map((oneFood, index) => {
          return (
            <FoodBox
              key={index}
              food={oneFood}
              toggleForm={ ()=> this.toggleForm()}
            /> */}
         
        

      </div>
    );
  }
}

export default App;
