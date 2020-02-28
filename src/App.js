/*
 * @Author: xiaomin
 * @Date: 2020-02-28 19:07:56
 * @LastEditTime: 2020-02-28 19:38:35
 */
import React from 'react';
import './assets/stylesheet/app.scss';
import Todo from './views/Todo';

function App() {
  return (
    <div className="App">
      <header>React Todolist</header>
      <Todo></Todo>
    </div>
  );
}

export default App;
