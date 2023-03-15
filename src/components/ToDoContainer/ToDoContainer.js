{/* <div className='ToDoContainer'>
<div className='ActiveToDo'>
  <h3 id='ActiveToDoHeader'>Active To-Do List</h3> 
 <ul>
  {todos.length ? (
    todos.map(({ _id, task, completed }, index) => (
      <li
        key={_id}
        onClick={(event) => handleUpdateTodo(event, _id)}
        className={completed ? "completed" : ""}
      >
        {task}{" "}
        <span onClick={(event) => handleDeleteTodo(event, _id)}>X</span>
      </li>
    ))
  ) : (
    <p>No tasks yet</p>
  )}
</ul>
</div>
</div> 
not sure if we can use this now*/}

