import { useState } from "react";

import AppHeader from "../app-header/app-header";
import TodoForm from "../todo-form/todo-form";
import TodoItem from "../todo-item/todo-item";
import ItemFilter from "../item-filter/item-filter";

import './app.css'

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todoInput) => {
        if (todoInput) {
            const newTodo = {
                id: Date.now().toString(), // генерация id
                todo: todoInput,
                done: false,
            }
            setTodos([...todos, newTodo]);
        }
    };

    const deleteTodo = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)]);
    };

    const toggleTodo = (id) => {
        setTodos([
            ...todos.map((todo) => 
                todo.id === id ? {...todo, done: !todo.done} : {...todo}
            )
        ])
    };

    const filterTodos = (todos, filter) => {
        
    }

    const TodoList = () => {
        return (
            <div className="todo-list">
                {todos.map((todo) => {
                    return (
                        <TodoItem 
                            key={todo.id}
                            todo={todo}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}/>
                    );
                })}
            </div>
        );
    }

    const doneCount = todos.filter((el) => el.done).length;
    const todoCount = todos.length - doneCount;

    return (
        <div className="app">
            <AppHeader />
            <div className="info-text">{todoCount} items left, {doneCount} items done</div>
            <TodoForm addTodo={addTodo}/>
            <TodoList />
            <ItemFilter />
        </div>
    );
};

export default App;

