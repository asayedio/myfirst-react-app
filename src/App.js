import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child.js';
import { num1, num2, test, test2 } from './module.js';
import Items from './components/Items.js';
class App extends Component {
  // Declare a new state variable, which we'll call "count"
  /*   const [info, changeIntialInfo] = React.useState({
      name: 'Ahmed',
      age: 25
    });
  
    function changeInfo() {
      changeIntialInfo((prevState) => {
        return({
          ...prevState,
          name: 'Mohamed'
          ,age:30
        });
      });
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
  const testArrow = () => console.log("Test Arrow! ");  */
 /*  state = {
    name: ''
  } */
  state = {
    items: [
      { id: 1, name: 'Ahmed', age: 20 },
      { id: 2, name: 'Mohamed', age: 22 },
      { id: 3, name: 'Eslam', age: 24 },
      { id: 4, name: 'Hassan', age: 26 },
      { id: 5, name: 'Ibrahim', age: 28 },
      { id: 6, name: 'Zyad', age: 30 }
    ]
  };

  textChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  submitForm = (e) => {
    e.preventDefault();
    this.setState({
      name: 'Succesully'
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <p>
          Hello React  {num1 + num2} {test()} {test2()}
        </p>
        <Child />
        {test()}
        {testArrow()}
        <button onClick={handleClick } >Click</button>
        <button onMouseMove={handleMove } >Move</button>
        <button onMouseLeave={handleLeave } >Leave</button>
        <button onClick={() => changeInfo()} >Change</button>
        <p>{info.name}</p>
        <p>{info.age}</p> */}

          <Items items={this.state.items} />

          <p>Form</p>
          <p>{this.state.name}</p>
          <form onSubmit={this.submitForm}>
            {/* <input type="text" onChange={this.textChange}/>
          <button>Submit</button> */}
            <textarea type="text" onChange={this.textChange} />
            <br />
            <select onChange={this.textChange}>
              <option value="v1">Option 1</option>
              <option value="v2">Option 2</option>
              <option value="v3">Option 3</option>
              <option value="v4">Option 4</option>
            </select>
            <br />
            <input type="submit" value="send" onSubmit={this.submitForm} />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
