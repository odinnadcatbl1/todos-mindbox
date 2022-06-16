import {FormControlLabel, Checkbox, Button} from '@mui/material';
import './todo-item.css'

const TodoItem = ({todo, toggleTodo, deleteTodo}) => {
    return (
        <div key={todo.id} className="todo-item">
            <div className={todo.done ? "todo-checkbox complete" : "todo-checkbox"}>
                <FormControlLabel label={todo.todo} control={<Checkbox checked={todo.done}/>} onChange={()=>toggleTodo(todo.id)}/>
            </div>
            <div className='todo-delete'>
            <Button variant="outlined" color="error" onClick={()=>{deleteTodo(todo.id)}}>
                Delete
            </Button>
            </div>
        </div>
    );
};

export default TodoItem;