import React from 'react';

const AddForm = ({ newTodo, setNewTodo, submit }) => {
    return (
        <div>
            <form onSubmit={submit}>
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