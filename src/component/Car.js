import React from "react";

// const myelement = <Car brand="Ford" />;
class Car extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "red",
      model: "suzuki",
    };
  }
  render() {
    return (
      <h2>
        Hi, I am having a Car! which is of {this.state.color} color and belongs
        to model {this.state.model}{" "}  of brand {this.props.brand} 
      </h2>
    );
  }
}


class Garage extends React.Component {
  render() {
    return (
      <div>
        <h1> In garage Class </h1>Nested class example
  
        <Car /> 
      </div>
    );
  }
}

export default Garage;
