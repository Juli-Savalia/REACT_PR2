import React from "react";
import "./style.css";

function Counter({ plus, minus, reset, count }) {
  return (
    <div className="container p-50 text-center">
      <h1 className="py-3">Counter App</h1>
      <h3 className="py-3">{count}</h3>
      <button
        onClick={() => plus()}
        className="rounded-circle bg-dark text-white text-center py-2 px-3 fs-5 me-3 border-0"
      >
        +
      </button>
      <button
        onClick={() => minus()}
        className="rounded-circle bg-dark text-white text-center py-2 px-3 fs-5 me-3 border-0"
      >
        -
      </button>
      <button
        onClick={() => reset()}
        className="rounded-circle bg-dark text-white text-center py-2 px-3 fs-5 me-3 border-0"
      >
        0
      </button>
    </div>
  );
}

export default Counter;
