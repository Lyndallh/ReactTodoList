import {useState} from 'react';
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import './App.css';

function App(){
  const [todoItems, setTodoItems] = useState([
    {
      text:"Bring in the roosters at night",
      isCompleted: false
    },{
      text:"Cover cage with a blanket",
      isCompleted: false
    },{
      text: "Let roosters out in the morning when they have finished crowing",
      isCompleted: false
    }
  ]);

  const addTodoItem = (text) => {   // bring in the new input text into the function
    const newTodoItems = [...todoItems, { text }];    // the new array is the 'exsisting array' + the text that was inputted into the input feild
    setTodoItems(newTodoItems);    // update the todoitems state with the new array
  };

  return (
    //this is what is rendered in the html under the root div src="/src/main.jsx"
    <div className='app'>
      <h1 className='todo-list'>My todo list</h1>
      {todoItems.map((todoItem, index) => (
        <TodoItem todoItem ={todoItem} key ={index} />
      ))}
      <TodoForm addTodoItem={addTodoItem} />
    </div>
  );
}

export default App;