import React from 'react';
import './App.css';
import List from './component/List';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todoLists: [],
      listName: ""
    }
    this.deleteList = this.deleteList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ listName: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.listName.length) {
      return;
    }
    const newItem = {
      listName: this.state.listName,
      id: Date.now()
    };
    this.setState(state => ({
      todoLists: state.todoLists.concat(newItem),
      listName: ''
    }));
  }

  deleteList = id => {
    const filteredLists = this.state.todoLists.filter(todoLists => {
      return todoLists.id !== id
    })
    this.setState({
      todoLists: filteredLists
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Nedap To-Do List App</h1>
        <List lists={this.state.todoLists} deleteList= {this.deleteList}/>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Create a list"  onChange={this.handleChange}
            value={this.state.text}/>
          <button type="submit"> Add new list </button>
        </form> 
      </div>
    );
  } 
}

export default App;