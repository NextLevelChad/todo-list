import React from 'react'
import Task from './Task'

export default function TaskList({ tasks, toggleTask, deleteTask }) {
    return (
        tasks.map( task => {
            return <Task key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
        })
    )
}
