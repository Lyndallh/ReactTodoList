import { useState } from 'react';

function TodoForm(props) {
    const [value, setValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) return;
        props.addTodoItem(value);
        setValue('');
    };


    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Add Todo..."
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        </form>  
    );
}

export default TodoForm;