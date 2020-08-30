import React from 'react'
import { DraggableItem } from '../item/DraggableItem';
import './itemList.css';

export const ItemList = ( {tasks, handleAddTask, handleDeleteTask} ) => {

    return (
        <div>
            { 
                tasks.map( (task, index) => (
                    <DraggableItem task={ task } id={ index } key = {task.id} handleDeleteTask = {handleDeleteTask}/>
                ))
            }
        <button className="btn-list" onClick = { () => handleAddTask() }>Add task</button>
        </div>
    );
}
