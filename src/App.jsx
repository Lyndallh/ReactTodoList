import {useState} from 'react';
import TodoItem from "./components/TodoItem";

function App(){
  const [todoItems, setTodoItems] = useState([
    "Buy Jeremy nothing.",
    "Buy Ben Beer.",
    "Buy Ben Food.",
    "Fine, get jeremy a beer"

  ]);
   
  return (
    <>
      <h1>My todo list</h1>
      {todoItems.map((item, index) => (
        <TodoItem key ={index} text ={item}/>
      ))}
    </>
  );
}

export default App;