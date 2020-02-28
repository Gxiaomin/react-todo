/*
 * @Author: xiaomin
 * @Date: 2020-02-28 19:47:18
 * @LastEditTime: 2020-02-28 21:29:39
 */
import React, { Component } from 'react';
import '../assets/stylesheet/todo.scss';

class TodoItem extends Component {
  // 删除事件
  deleteTodo (id) {
    this.props.deleteItem(id);
  }

  // 改变待办状态
  changeStatus (id) {
    this.props.completedItem(id);
  }

  render () {
    let ele = null;
    
    if (this.props.todos && this.props.todos.length) {
      ele = this.props.todos.map(todo => {
        return (
          <div className={`todo-item ${ todo.completed ? 'completed' : ''}`} key={todo.id}>
            <input type="checkbox" className="toggle" onChange={() => this.changeStatus(todo.id)} />
            <label>{ todo.content }</label>
            <button className="destory" onClick={() => this.deleteTodo(todo.id)}></button>
          </div>
        )
      })
    } else {
      ele = <div className="no-list">暂无待办事项</div>
    }
    return ele;
  }
}

export default TodoItem;