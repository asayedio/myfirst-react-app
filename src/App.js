import React from 'react';
import logo from './logo.svg';
import './App.css';
import {num1,num2,test,test2} from './module.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello React  {num1 + num2} {test()} {test2()}
        </p>

      </header>
    </div>
  );
}

export default App;
