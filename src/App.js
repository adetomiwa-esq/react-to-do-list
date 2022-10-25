import './App.css';
import React, { useState, useEffect } from 'react';

import FormInput from './components/FormInput';
import TodoList from './components/TodoList';


function App() {
  const [input, setInput] = React.useState("");
  const [list, setList] = React.useState([]);
  const [status, setStatus] = React.useState("all")
  const [filteredTodos, setFilteredTodos] = React.useState([])

  useEffect(() => {
    filterHandler()
  }, [status, list])


  function filterHandler(){
    switch(status){
      case 'completed':
        setFilteredTodos(list.filter((todo) => todo.completed === true))
        break;

      case 'uncompleted':
        setFilteredTodos(list.filter((todo) => todo.completed === false))
        break;

      default:
        setFilteredTodos(list)
        break;
    }
  }

  return (
    <div className='body'>
      <div className="App">
        <header>
          <h1>Tomiwa's todo list</h1>
        </header>
        <FormInput 
          input={input}
          setInput={setInput}
          list={list}
          setList={setList}
          setStatus={setStatus}
        />

        <TodoList 
          list={list}
          setList={setList}
          filteredTodos={filteredTodos}
        />
      </div>
    </div>
  );
}

export default App;
