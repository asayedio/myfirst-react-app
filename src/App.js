import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from  './Child.js';
import {num1,num2,test,test2} from './module.js';
function App() {
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
      </header>
    </div>
  );
}

export default App;
