import React from 'react'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import '../css/task.css'


function Task({ task, toggleTask, deleteTask }) 
{
    function handleTaskClick() {
        toggleTask(task.id)
    }
    
    function handleDeleteTask() {
        deleteTask(task.id)
    }

    return (

        <div className="task">  
            <label for={task.name} className="Task-Name" style={{'text-decoration': task.complete ? 'line-through' : 'none'}}>{task.name}</label> 
            <input id={task.name} className="Task-Completed" type="checkbox" checked={task.complete} onChange={handleTaskClick}></input>     
            <DeleteOutlinedIcon className="Task-Delete-Icon" onClick={handleDeleteTask}/>

        </div>

    )
    
}

export default Task