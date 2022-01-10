import './AddForm.css';

const AddForm = ({ newTodo, setNewTodo, handleSubmit }) => {
    return (
        <div>
            <form onSubmit={handleSubmit} className='form'>
                <input className='input' 
                type="text" 
                placeholder="New ToDo" 
                value={newTodo} 
                onChange={evt => setNewTodo(evt.target.value)} 
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddForm;