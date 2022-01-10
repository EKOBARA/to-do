import Todo from "./Todo";

const Todos = ( {todos, handleUpdate, setTodos }) => {

    function handleDelete(toDelete) {
		const filteredTodos = todos.filter((todo) => todo != toDelete);
		setTodos(filteredTodos);
	}
    return (
        <div>
            {todos.map((todo, idx) => (
                <Todo 
                    key={idx} 
                    todo={todo} 
                    idx={idx} 
                    handleUpdate={handleUpdate} 
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export default Todos;