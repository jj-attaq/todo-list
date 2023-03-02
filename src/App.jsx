import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Dashboard from './components/dashboard.jsx';
import Button from './components/button.jsx';
import './App.css';
const log = console.log;

function App() {
    const [currentList, setList] = useState([])
    const [currentString, setString] = useState('')
    /*
    setList(
        [
            ...currentList, todo1
        ]
    )
    */
    function createTodo(todo) {
        const edit = <Button value={'Edit'} style={'btn'} onClick={() => console.log('test')}/>;
        const remove = <Button value={'Remove'} style={'btn'} onClick={() => console.log('test')}/>;
        return [{
            todo,
            edit,
            remove
        }]
    }
    const todo1 = createTodo('Tie shoes.')
    return (
        <div className="App">
            <div>
                <p>TODO LIST</p>
            </div>
            <Dashboard onClick={() => {
                setString('test')
            }} />
            <div className={'todoList'}>{currentString}</div>
        </div>
    )
}

export default App
