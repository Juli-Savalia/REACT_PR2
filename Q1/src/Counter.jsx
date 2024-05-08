import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  Increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  Decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  Reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <>
        <h1>Counter APP</h1>
        <div className="d-flex justify-content-center py-4">
          <button
            className="mx-5 bg-success text-white fw-bold fs-5"
            onClick={() => this.Increment()}
          >
            +
          </button>
          <p className="rounded-4 bg-warning px-5 py-3 fw-bold text-white">
            count :- {this.state.count}
          </p>
          <button
            className="mx-5 bg-success text-white fw-bold fs-5"
            onClick={() => this.Decrement()}
          >
            -
          </button>
        </div>
        <button
          className="bg-success fs-5 fw-bold text-white"
          onClick={() => this.Reset()}
        >
          Reset
        </button>
      </>
    );
  }
}

export default Counter;
