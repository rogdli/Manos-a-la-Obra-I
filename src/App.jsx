import { useState } from 'react'
import './App.css';


function App() {
  return(
  <div class = "container">

    <h2>Lista de tareas de Rodrigo</h2>

    <div className = "textBox">
      <input type = "text;"></input>
      <button className = "addButton">Add</button> 
    </div>

    <div className = "taskBox">
      <input type = "checkbox"></input>
      <p>Task N</p>
      <button>🗑️</button>
    </div>

    <div className = "taskBox">
      <input type = "checkbox"></input>
      <p>Task N-1</p>
      <button>🗑️</button>
    </div>

    <div className = "taskBox">
      <input type = "checkbox"></input>
      <p><del>Completed Task N-2</del></p>
      <button>🗑️</button>
    </div>

    <div className = "taskBox">
      <input type = "checkbox"></input>
      <p>Task K</p>
      <button>🗑️</button>
    </div>

    <div className = "taskBox">
      <input type = "checkbox"></input>
      <p>Task 2</p>
      <button>🗑️</button>
    </div>

    <div className = "taskBox">
      <input type = "checkbox"></input>
      <p><del>Completed Task 1</del></p>
      <button>🗑️</button>
    </div>

  </div>
  )
}

export default App
