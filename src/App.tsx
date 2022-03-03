import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import DeleteTodo from './components/DeleteTodo';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <TodoItem/>
      <DeleteTodo/>
    </div>
  );
}

export default App;
