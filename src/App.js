import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };

    
  }

  

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) //Taking the data from the url and putting it into the json format
    .then(users => this.setState({monsters: users})) //setting the state to the users and below it pulls out the name and displays it by use of the map fuction - This also fills the array above
  }
  handleChange = (e) => { //Here the structure of the method is way different than what we learned before - using the arrow function is shorter - don't need to use bind - it is automatic with the arrow function
    this.setState({searchField: e.target.value});
  }

  render() {
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="App">  
    <h1>Monsters Rolodex</h1>
    <SearchBox
      placeholder='Search monsters'
      handleChange={this.handleChange}
    />
    <CardList monsters={filteredMonsters} />       
    </div>
  )
  };
}

export default App;
