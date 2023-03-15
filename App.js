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

      </div>
      <div className='loginBox'>

      </div>
      <div className='logoutBox'>

      </div>
      <div className='messageBox'>

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
