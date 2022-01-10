import Todo from "./todo/Todo";

const Todos = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Todo</th>
                        <th>Completed?</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, idx) => (
                    <Todo 
                        key={idx} 
                        todo={todo} 
                        idx={idx} 
                        handleUpdate={handleUpdate} 
                        handleDelete={handleDelete}
                    />))}
                </tbody>
            </table>
        </div>
    );
};

export default Todos;