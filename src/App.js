import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from  './Child.js';
import {num1,num2,test,test2} from './module.js';
function App() {
  React.state = {
    name:"Ahmed"
  }
  function handleClick(e) {
    e.preventDefault();
    console.log(React.state.name);
  }
  function handleMove(e) {
    e.preventDefault();
    console.log('The mouse was moved.');
  }
  function handleLeave(e) {
    e.preventDefault();
    console.log('The mouse was leaved.');
  }
//the normal function
function test() {
console.log("Test !");
}
//the arrow function //we can remove {} in case it's only one line
const testArrow = () => console.log("Test Arrow! "); 

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello React  {num1 + num2} {test()} {test2()}
        </p>
        <Child />
        {test()}
        {testArrow()}
        <button onClick={handleClick } >Click</button>
        <button onMouseMove={handleMove } >Move</button>
        <button onMouseLeave={handleLeave } >Leave</button>
      </header>
    </div>
  );
}

export default App;
