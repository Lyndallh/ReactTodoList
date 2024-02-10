import {useState} from 'react';
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";

function App(){
  const [todoItems, setTodoItems] = useState([
    "Bring in the roosters at night",
    "Cover cage with a blanket",
    "Let roosters out in the morning when they have finished crowing",

  ]);

  const addTodoItem = (text) => {   // bring in the new input text into the function
    const newTodoItems = [...todoItems, text];    // the new array is the 'exsisting array' + the text that was inputted into the input feild
    setTodoItems(newTodoItems);    // update the todoitems state with the new array
  };

  return (
    //this is what is rendered in the html under the root div src="/src/main.jsx"
    <>
      <h1>My todo list</h1>
      {todoItems.map((item, index) => (
        <TodoItem key ={index} text ={item}/>
      ))}
      <TodoForm addTodoItem={addTodoItem} />
    </>
  );
}

export default App;