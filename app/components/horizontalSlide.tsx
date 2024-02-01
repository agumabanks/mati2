import React from "react";
// import "./styles.css";
// import { Paper } from "@material-ui/core";
import map from "lodash/map";
import range from "lodash/range";


export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
        {map(range(20), (_: any) => (
          <div className='flex sticky top-40 z-50 p-5 '>
          <button className='my-3 bg-black text-white hover:bg-red-500 hover:text-white rounded py-3 px-7'>Join Us </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const Container = () => {
  return (
    <div style={{ height: "2300px", width: "514px", margin: "16px" }}>
      {/* <Paper style={{ height: "100%", width: "514px" }}>Hello</Paper> */}

    </div>
  );
};
