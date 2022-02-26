import logo from './logo.svg';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import {useState} from 'react';

const BlackTodoItem = styled(TodoItem)`
  background: black;
`

let id=2
function App() {
  //immutable
  const [todos, setTodos] = useState([
    {id: 1, content:'abc'}
  ])

  const [value, setValue] = useState('')

  const handleButtonClick = () => {
    setTodos([{
      id,
      content: value
    },...todos])
    setValue('')
    id++
  }

  const handleInput = (e) => {
    setValue(e.target.value);
  }
  //實作刪除功能
  const handleDelete = id => {
    setTodos(todos.filter(todo =>
      todo.id !== id
    ))
    
  }

  return (
    <div className='App'>
      <input type="text" placeholder='todo' value={value} onChange={handleInput}   />
      <button onClick={handleButtonClick}>Add Todo</button>
      {
        todos.map(todo=> <TodoItem key={todos.id} todo={todo} handleDelete={handleDelete}/>)
      }
      
    </div>
  );
}

export default App;
