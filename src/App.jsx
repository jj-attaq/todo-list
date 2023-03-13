import { useState } from 'react'
import Button from './components/button.jsx';
import TodoList from './components/todoList.jsx';
import reactLogo from './assets/react.svg';
import './App.css';
const log = console.log;
let n = 0;

function App() {
    const [todos, setTodos] = useState([]);
    function createTodo() {
        const todo = prompt('What do you need to do?', )
        const nextId = n++;
        const id = nextId.toString();
        return {
            id,
            todo
        }
    }
    log(todos)
/*
    setTodos(
        [...todos, prompt()]
    )}}
*/
    return (
        <>
        <Button style={'btn'} value={'Add TODO'} onBtnClick={() => {
            setTodos([
                ...todos,
                createTodo()
            ])
        }}
        />
        <br />
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.todo}</li>
            ))}
        </ul>
        </>
    )
}

export default App
