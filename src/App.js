import React ,{ useState, Component }from 'react';
import logo from './logo.svg';
import './App.css';
import Child from  './Child.js';
import {num1,num2,test,test2} from './module.js';
import Items from  './components/Items.js';
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
state = {
  items :[
    {id:1,name:'Ahmed',age:20},
    {id:2,name:'Mohamed',age:22},
    {id:3,name:'Eslam',age:24},
    {id:4,name:'Hassan',age:26},
    {id:5,name:'Ibrahim',age:28},
    {id:6,name:'Zyad',age:30}
  ]
};
render(){
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
        <Items items={this.state.items}/>
      </header>
    </div>
  );
}
}

export default App;
