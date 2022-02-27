import logo from './logo.svg';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import {useState, useRef} from 'react';

const BlackTodoItem = styled(TodoItem)`
  background: black;
`

let id=3;
function App() {
  //immutable
  const [todos, setTodos] = useState([
    {id: 1, content:'abc', isDone:true},
    {id: 2, content:'not done', isDone:false}
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
  //實作編輯功能
  const handleToggleIsDone = id => {
    setTodos(todos.map(todo => {
      if(todo.id !== id) return todo
      return {
        ...todo,
        isDone: !todo.isDone
      }
    }))
    
  }

  return (
    <div className='App'>
      <input type="text" placeholder='todo' value={value} onChange={handleInput}   />
      <button onClick={handleButtonClick}>Add Todo</button>
      {
        todos.map(todo=> <TodoItem key={todos.id} todo={todo} handleDelete={handleDelete} handleToggleIsDone ={handleToggleIsDone}/>)
      }
      
    </div>
  );
}

export default App;
