import logo from './logo.svg';
import './App.css';
import React from "react";
import Car from './Car/Car'

function App() {
  const divStyle = {
      textAlign: 'center'
  }
  return (
    <div style={divStyle}>
      <h1>Hello</h1>
      <Car name={'Ford'} year={2018}>
          <p style={{color: 'blue'}}>Color</p>
      </Car>
      <Car name={'Audi'} year={2016}>
          <p style={{color: 'red'}}>Color</p>
      </Car>
    </div>
  );
}

export default App;
