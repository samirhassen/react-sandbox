import React, { Component } from "react";

export class CountComponent extends Component {
  state = {
    count: 1,
  };
  clickHandler() {
      this.state.count++;
  }
  render() {
    return (
      <div>
        <h1>Jensen Rocks</h1>
        <p>{this.state.count < 5 ? 'Not found' : this.state.count}</p>
        <button onClick={this.clickHandler}>Increase!</button>
      </div>
    );
  }
}


export default CountComponent;
