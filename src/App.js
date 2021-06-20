import React, { Component } from 'react';
import './App.css';
import {CardList} from "./components/card-list.component";
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  
  constructor () {
    super();
    this.state = {
      monsters: [],
      search_value: ""
    }
  }
  
  componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  inputChangeHandler = (e) => {
    console.log("input change handler");
    this.setState({search_value: e.target.value});
        
  }

  render () {
    const {monsters, search_value} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search_value)); 
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder = {"search monsters"}
        changeHandler = {this.inputChangeHandler}/>        
        <CardList monsters = {filteredMonsters} /> 
      </div>
    );
  }
}

export default App;
