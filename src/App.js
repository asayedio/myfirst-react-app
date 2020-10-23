import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from  './Child.js';
import {num1,num2,test,test2} from './module.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello React  {num1 + num2} {test()} {test2()}
        </p>
        <Child />
      </header>
    </div>
  );
}

export default App;
