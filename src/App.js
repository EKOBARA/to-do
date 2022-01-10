import { useState, useEffect } from 'react';
import AddForm from './components/AddForm';
import Todos from './components/Todos';
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

	function handleDelete(toDelete) {
		const filteredTodos = todos.filter((todo) => todo != toDelete);
		setTodos(filteredTodos);
	}

  return (
    <div className="App">
      <AddForm 
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        submit={handleSubmit} 
      />
      <Todos 
        todos={todos}
        update={handleUpdate}
        delete={handleDelete}
      />
    </div>
  );
}

export default App;
