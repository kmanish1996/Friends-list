import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      searchFeild: ''
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(profile => this.setState({ friends: profile }));
  }


  render() {
    const {friends, searchFeild} = this.state;
    const filteredFriends = friends.filter(friends => 
      friends.name.toLowerCase().includes(searchFeild.toLowerCase())
      );

    return (
      <div className="App">
      <h1>Friends List</h1>
       <SearchBox
       placeholder='search friends'
       handleChange={e => this.setState({searchFeild: e.target.value})}
       />
            <CardList friends={filteredFriends} />
      </div>
    )
  };
}

export default App;
