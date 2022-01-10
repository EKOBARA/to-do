import { useState } from 'react';
import Todos from './components/Todos';
import AddForm from './components/AddForm';

import './App.css';

function App() {
  
  const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState('');

  function handleSubmit(evt) {
		evt.preventDefault();
		setTodos([...todos, { todo: newTodo, completed: false }]);
		setNewTodo('');
	}

	function handleUpdate(updatedTodo, idx) {
		const todosCopy = [...todos];
		todosCopy[idx] = updatedTodo;
		setTodos(todosCopy);
	}

	// function handleDelete(toDelete) {
	// 	const filteredTodos = todos.filter((todo) => todo != toDelete);
	// 	setTodos(filteredTodos);
	// }

  return (
		
			<div className='App'>
				<h1>To-Do</h1>
        <AddForm 
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          handleSubmit={handleSubmit}
        />
        <Todos 
          todos={todos}
          setTodos={setTodos}
          handleUpdate={handleUpdate}
          // handleDelete={handleDelete}
        />
			</div>
		
	);
};

export default App;
