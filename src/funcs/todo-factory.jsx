import Button from '../components/button.jsx';
export default function createTodo(todo) {
    const edit = <Button value={'Edit'} style={'btn'} onClick={() => console.log('test')}/>;
    const remove = <Button value={'Remove'} style={'btn'} onClick={() => console.log('test')}/>;
    return {
        todo,
        edit,
        remove
    }
}
