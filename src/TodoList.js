import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleAddTodo = () => {
    const { newTodo, todos } = this.state;
    if (newTodo.trim() !== '') {
      const updatedTodos = [...todos, newTodo];
      this.setState({ todos: updatedTodos, newTodo: '' });
    }
  };

  handleDeleteTodo = (index) => {
    const { todos } = this.state;
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    this.setState({ todos: updatedTodos });
  };

  render() {
    const { todos, newTodo } = this.state;

    return (
      <div>
        <h2>To-Do List</h2>
        <div>
          <input type="text" value={newTodo} onChange={this.handleInputChange} />
          <button onClick={this.handleAddTodo}>Add</button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => this.handleDeleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
