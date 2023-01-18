import React, { useState } from 'react'

function ToDoList() {

    let initialTodoValue = JSON.parse(localStorage.getItem('mytodos'));
    console.log(initialTodoValue)
    if(!initialTodoValue){
        initialTodoValue = [];
    }
    const [todos, setTodos] = useState(initialTodoValue);


    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = event.target.elements.todo.value;
        // copy old todos
        // const updatedTodos = [...todos];
        // updatedTodos.push(newTodo);
        const updatedTodos = [...todos, { text: newTodo, done: false, editing: false }];
        setTodos(updatedTodos);
        localStorage.setItem('mytodos', JSON.stringify(updatedTodos));

        event.target.elements.todo.value = "";

    }

    const handleDelete = (index) => {
        // console.log(index);

        const updatedTodos = [...todos];
        // console.log(updatedTodos[index]);

        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
        localStorage.setItem('mytodos', JSON.stringify(updatedTodos));

    }

    const handleDone = (index) => {
        const updatedTodos = [...todos];
        // console.log(updatedTodos[index]);
        updatedTodos[index].done = !updatedTodos[index].done;
        // console.log(updatedTodos);
        setTodos(updatedTodos);
        localStorage.setItem('mytodos', JSON.stringify(updatedTodos));


    }

    const handleEdit = (index, event) => {
        const updatedTodos = [...todos];
        updatedTodos[index].text = event.target.value;
        setTodos(updatedTodos);
        localStorage.setItem('mytodos', JSON.stringify(updatedTodos));

    }

    const handleEditButtonClick = (index) => {
        const updatedTodos = [...todos];
        // console.log(updatedTodos[index]);
        updatedTodos[index].editing = !updatedTodos[index].editing;
        // console.log(updatedTodos);
        setTodos(updatedTodos);
        localStorage.setItem('mytodos', JSON.stringify(updatedTodos));

    }



    return (
        <div className='container'>
            <h1 className='display-1 text-center'>To-do List</h1>
            <form className='d-flex mb-4' onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter To-do text' name='todo' className='form-control w-75' />
                <button type='submit' className='btn btn-primary w-25'>Add Todo</button>
            </form>
            <div>
                <h2 className='display-6'>Current Todos:</h2>
                <ul className='list-group'>
                    {todos.map((todo, i) => (
                        <li key={i} className='list-group-item'>
                            {todo.editing ?
                                <input className='form-control' value={todo.text} onChange={(e) => handleEdit(i, e)} />
                                :
                                <div style={{ float: 'left', textDecoration: todo.done ? 'line-through' : 'none' }} >
                                    {todo.text}
                                </div>
                            }
                            <button style={{ float: 'right' }} className={'btn m-2 ' + (todo.done ? 'btn-secondary' : 'btn-success')} onClick={() => handleDone(i)} > {todo.done ? 'undo' : 'done'} </button>
                            <button style={{ float: 'right' }} className='btn btn-danger m-2' onClick={() => handleDelete(i)} >Delete</button>
                            <button style={{ float: 'right' }} className='btn btn-secondary m-2' onClick={() => handleEditButtonClick(i)} >Edit</button>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ToDoList;