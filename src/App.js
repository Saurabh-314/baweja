import { useEffect, useState } from 'react';
import './App.css';
import ListTodo from './components/ListTodo';

function App() {
  const [todos, setTodos] = useState([]);

  function deleteHandler(id) {
    console.log("id", id)
    const newList = todos.filter((item) => {
      return (
        item.id !== id
      )
    })
    setTodos(newList);
  }

  useEffect(() => {
    async function fetchTodo() {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => {
          setTodos(json)
        });
    }
    fetchTodo();
  }, [])
  return (
    <div className='container'>
      <div className="logo">
        TODO LIST
      </div>
      <hr />
      <div className="input-field">
        <form>
          <input
            type='text'
            placeholder='add items'
          />
          <button className='add-btn'>Add</button>
        </form>
      </div>
      <ListTodo todo={todos} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
