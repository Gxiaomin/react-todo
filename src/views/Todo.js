/*
 * @Author: xiaomin
 * @Date: 2020-02-28 19:22:51
 * @LastEditTime: 2020-02-28 21:36:19
 */
import React, { Component } from 'react';
import '../assets/stylesheet/todo.scss';
import TodoItem from './TodoItem';

var id = 0;
class Todo extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      todos: [],
      inputVal: ''
    }
  }

  // 输入
  changeToInput (e) {
    this.setState({
      inputVal: e.target.value
    })
  }

  // 添加todo
  addTodo () {
    if (this.state.inputVal === '') return;

    let newTodo = [{
      id: id++,
      content: this.state.inputVal.trim(),
      completed: false
    }]
    
    this.setState({
      todos: newTodo.concat(this.state.todos),
      inputVal: ''
    })
  }

  // 改变todo状态
  onCompletedItem (id) {
    let copyTodos = this.state.todos;
    copyTodos.forEach((item, index) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
    })

    this.setState({
      todos: copyTodos
    })
  }

  // 删除todo 
  onDeleteItem (id) {
    this.state.todos.splice(this.state.todos.findIndex(todo => todo.id === id), 1);

    this.setState({
      todos: this.state.todos
    })
  }

  render() {
    return (
      <section className="todo-wrapper">
        <div className="input-wrapper">
          <input
            type="text"
            className="add-input"
            placeholder="添加事件清单吧~"
            value={ this.state.inputVal }
            onChange={(e) => this.changeToInput(e)}
          />
          <button className="add-btn" type="button" onClick={this.addTodo.bind(this)}>添加</button>
        </div>
        <div className="todo-body">
          <TodoItem 
            todos={ this.state.todos } 
            completedItem={ this.onCompletedItem.bind(this) }
            deleteItem={ this.onDeleteItem.bind(this) }
          ></TodoItem>
        </div>
      </section>
    );
  }
}

export default Todo;