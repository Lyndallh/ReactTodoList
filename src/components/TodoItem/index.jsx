import './styles.css'

function TodoItem(props){

    return(
        <div className={`todo-item ${props.todoItem.isCompleted ? "complete" : ""}`}>
            {props.todoItem.text}
            <div>
                <button onClick={() =>
                    props.completeTodoItem(props.index)}>Complete</button>
                <button onClick={() =>
                    props.removeTodoItem(props.idex)}>x</button>
            </div>
        </div>
        );

}
export default TodoItem;