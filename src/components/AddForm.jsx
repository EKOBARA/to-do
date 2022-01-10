import React from 'react';

const AddForm = () => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="new todo" 
          value={newTodo} 
          onChange={evt => setNewTodo(evt.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
        </div>
    );
};

export default AddForm;