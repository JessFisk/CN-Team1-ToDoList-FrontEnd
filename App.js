import './App.css';

function App() {
  
  
  return (
  <div className='App-wrapper'>

    <div className='login-display'>
      <p>{user.username} is logged in</p>
    </div>

    <div className='title'>
      <h1> Team 1 To-Do List App</h1>
    </div>

    <div className='LogOrSigninContainer'>
      <div className='registerBox'>
        <p className='promptText'>username</p>
        <input></input>
        <p className='promptText'>email</p>
        <input></input>
        <p className='promptText'>password</p>
        <input></input>
        <button type='submit'>Register User</button>

      </div>
      <div className='loginBox'>
        <p className='promptText'>username</p>
        <input></input>
        <p className='promptText'>password</p>
        <input></input>
        <button type='submit'>Login</button>

      </div>
      <div className='logoutBox'>
        <button>logout</button>

      </div>
      <div className='messageBox'>
        <h3>Message area</h3>
        <p>placeholder text: X has logged in/out</p>

      </div>
    </div>
    
    <div className='ToDoContainer'>
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

    <div className='DoneToDo'>
        <h3 id='DoneToDoHeader'>Done To-Do List </h3>
        <ul></ul>
        <span onClick={(event) => handleDeleteTodo(event, _id)}>X</span>
    </div>
    
    <div className='TextArea'>
      <h3 id='InputHeader'>Type new task here</h3>
      <input>user will type task here</input>
      <button type='submit'>Add new task</button>
    </div>
  </div>
    
    
    
    
  </div>
  );
}

export default App;
