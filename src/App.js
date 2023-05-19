import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useMemo } from 'react';
import TodoProvider from './components/ToDoList/Provider/TodoProvider';
import TodoList from './components/ToDoList/Todolist';
import TodoForm from './components/ToDoList/Provider/TodoForm';

function App(){
  return(
    <div class="App">
      <h1>TODO List</h1>
      <TodoProvider>
        <TodoForm/>
        <TodoList/>
      </TodoProvider>
    </div>
  )
}

export  default App;