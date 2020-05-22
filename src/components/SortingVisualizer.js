import React, { Component } from "react";

class SortingVisualizer extends Component {
  state = { array: [] };

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const arr = [];
    const min = 5;
    const max = 1000;
    for (let i = 0; i < 100; i++) {
      arr.push(Math.floor(Math.random() * (max - min) + min)); // pushes a random number between min and max
    }

    this.setState({ array: arr });
  }

  render() {
    return (
      <div>
        {this.state.array.map((val, idx) => (
          <div className="bar" key={idx}>
            {val}
          </div>
        ))}
      </div>
    );
  }
}

export default SortingVisualizer;
