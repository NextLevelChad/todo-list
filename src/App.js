import {useState, useRef, useEffect} from 'react'
import TaskList from './Components/TaskList'
import { v4 as uuidv4} from 'uuid'
import './css/app.css'

const LOCAL_STORAGE_KEY = 'taskApp.tasks'

function App() {
  
  //state for tasks to go in
  const [tasks, setTasks] = useState([]);
  const taskNameRef = useRef();

  //useEffect to load Tasks from the local storage
  //Todo: we need to pull this from Database Eventually
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTasks) setTasks(storedTasks)

  }, [])

  //Toggling the Task Completed
  function toggleTask(id){
    const newTasks = [...tasks]
    const task = newTasks.find(task => task.id === id)
    task.complete = !task.complete
    setTasks(newTasks)
  }


  //useEffect to save the tasks array to the local storage when it is changed
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])
  

  //add task function
  function handleAddTask(e) {
      const name = taskNameRef.current.value
      if (name === '') return
      setTasks(prevTasks => {
        return [...prevTasks, { id: uuidv4(), name: name, complete: false}]
      })
      taskNameRef.current.value = null;
  }

  //delete task function
  function deleteTask(id) {
    const newTasks = [...tasks]
    const remainingTasks = newTasks.filter(task => task.id !== id)
    console.log(remainingTasks)
    setTasks(remainingTasks)
  }

  return (
    <div className="App">
      <div className="Background">
        <div className="Glass-Pane">
          <input className="Add-Task-Text" type="text" placeholder="Enter the Task Name" ref={taskNameRef}></input>
          <button className="Add-Task-Button" onClick={handleAddTask}>Add</button>
          <div className="Task-Container">
            <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask}/>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
