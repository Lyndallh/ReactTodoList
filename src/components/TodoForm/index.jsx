import { useState } from 'react';

function TodoForm(props) {
    const [value, setValue] = useState("")

    const handleSubmit = (event) => { //handleSubmit is a built in function that expects an event (the event is created from onSubmit) is often referred to as 'e' instead of event
        event.preventDefault(); // we want to stop html and JS default behaviour
        if (!value) return; // is there is not value, early return so that blank values don't go into the database
        props.addTodoItem(value); 
        setValue('');
    };

    return (// could use onSubmit inside form properties like this: <form onSubmit={handleSubmit}> instead of having a onClick button but using a button is more user friendly
        <form> 
            <input 
                type="text" 
                placeholder="Add Todo..."
                value={value} // this is resetting the input feild to '' using SetValue('') from line 10
                onChange={(event) => setValue(event.target.value)} //event.target is the input
            />
            <button onClick={handleSubmit}>Submit</button>
        </form>  
    );
}

export default TodoForm;