import {useState} from 'react';
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import './App.css';

function App(){
  const [todoItems, setTodoItems] = useState([
    {
      text:"Sushi Rice",
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
    const newTodoItems = [...todoItems, { text }];    // the new array is the 'exsisting array' and the text that was inputted into the input feild
    setTodoItems(newTodoItems);    // update the todoitems state with the new array
  };

  const completeTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    if(newTodoItems[index].isCompleted){ // Check if the todo item at the given index is completed
      newTodoItems[index].isCompleted = false; // If it's completed, set it to false (toggle off)
    }else{
      newTodoItems[index].isCompleted = true;  // If it's not completed, set it to true (toggle on)
    }
    setTodoItems(newTodoItems); // Update the todoItems state with the new array
  };

  const removeTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index,1);
    setTodoItems(newTodoItems);
  };

  return (
    //this is what is rendered in the html under the root div src="/src/main.jsx"
    <div className='app'>
      <h1 className='todo-list'>Suzie's todo list</h1>
      {todoItems.map((todoItem, index) => (
        <TodoItem todoItem ={todoItem} key ={index} index={index} completeTodoItem={completeTodoItem} removeTodoItem={removeTodoItem}/>
      ))}
      <TodoForm addTodoItem={addTodoItem} />
    </div>
  );
}

export default App;