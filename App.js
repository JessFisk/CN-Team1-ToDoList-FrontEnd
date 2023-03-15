import './App.css';

function App() {
  
  
  return (
  <div className='App-wrapper'>

    <div className='login-display'>
      <p>{username} is logged in</p>
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
        <p>placeholder text: X has logged in/out</p>

      </div>
    </div>
    
    <div className='ToDoContainer'>
      <div className='ActiveToDo'>
        <h1 id='ActiveToDoHeader'>
        Active To-Do List
        </h1>
      </div>

    <div className='DoneToDo'>
        <h1 id='DoneToDoHeader'>
          Done To-Do List
        </h1>
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
