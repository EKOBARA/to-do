import './Todo.css';

const Todo = ( { todo, idx, handleUpdate, handleDelete } ) => {

    function toggleTodo() {
        const todoCopy = {...todo};
        todoCopy.completed = !todoCopy.completed;
        handleUpdate(todoCopy, idx);
    }
    

    return (
        
        <div className='todo' >
            <p onClick={toggleTodo} className={todo.completed ? 'done' : 'task'} >{todo.todo}</p>
            <button className='remove' type='submit'onClick={() => handleDelete(todo)}>
                    X
                </button>
        </div>
    );
};

export default Todo;