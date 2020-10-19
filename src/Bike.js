import React from "react";

class Bike extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "red",
      model: "honda",
    };
  }

  changeColor = () => {
    this.setState({
      color: "yellow",
    });
  };

  render() {
    return (
      <div>
        <h2>
          Hi, I am a Bike! and my color is
          {this.state.color}
        </h2>

        <h1>
          now i am changing my color to
          <button onClick={this.changeColor}>change Color</button>
        </h1>
      </div>
    );
  }
}
export default Bike;
