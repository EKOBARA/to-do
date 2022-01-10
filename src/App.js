import { useState, useEffect } from 'react';
import AddForm from './components/AddForm';
import Todos from './components/Todos';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <AddForm />
      <Todos />
    </div>
  );
}

export default App;
