import React from 'react';
import './Todo.css'

class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [],
            task: ""
        }
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    addTask(e){
        e.preventDefault();
        const newTask = {
            details: this.state.task,
            done: false
        }
        this.setState(state => ({
            todos: state.todos.concat(newTask),
            task: ''
        }));

    }
    handleChange(e){
        this.setState({task: e.target.value})
    }

    render(){
        return (
            <div>
                <p>
                    {this.props.listName}
                        <span onClick={() => this.props.deleteList(this.props.id)}>x</span>
                </p>

                {this.state.todos.map(todo => 
                    <li className={ todo.done ? "done":"notDone"}>{todo.details}</li>
                    )}

                <form onSubmit={this.addTask}>
                    <input placeholder="Make a Task"  onChange={this.handleChange}
                        value={this.state.text}/>
                    <button type="submit"> Add new task </button>
                </form> 
            </div>
        );
    }
}

export default Todo;