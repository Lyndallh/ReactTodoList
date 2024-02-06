import {useState} from 'react';
import TodoItem from "./components/TodoItem";

function App(){
  const [todo, setTodo] = useState([
    "Buy Jeremy nothing.",
    "Buy Ben Beer.",
    "Buy Ben Food.",
    "Fine, get jeremy a beer"

  ]);
  function generateTodoComponent(todo,index){
    return <TodoItem key ={index} text={todo}/>;
  }

  return <>
  <h1>My todo list</h1>
  {todo.map(generateTodoComponent)}
  </>;
}

export default App;