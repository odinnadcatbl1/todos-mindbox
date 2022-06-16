import { useState } from "react";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input'
import './todo-form.css'

const TodoForm = ({addTodo}) => {
    const [todoInput, setTodoInput] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(todoInput);
        setTodoInput('');
    };

    const onInputChange = (e) => {
        setTodoInput(e.currentTarget.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="todo-form">
                <div className="todo-input">
                    <Input className="todo-input"
                        value={todoInput}
                        type="text"
                        placeholder="What needs to be done?"
                        onChange={onInputChange}
                        fullWidth={true}
                    />
                </div>
                <div className="todo-button">
                    <Button type="submit" className="todo-button"
                        variant="contained">
                        Add
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default TodoForm;