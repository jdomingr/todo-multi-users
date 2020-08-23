import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './item.css';
import { useForm } from '../../../hooks/useForm';
export const DraggableItem = ( {task, id, handleDeleteTask }) => {

 
    const [ data, handleInputChange ] = useForm({ taskContent: ''});
    
    return (
        <Draggable draggableId={ task.id} index={ id }>
            { provided => (
                <div className="draggable-item" ref= {provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <textarea className="textarea-input" name="taskContent" value = {data.taskContent} onChange={handleInputChange}></textarea>
                    {task.content}
                    <div className="closable-item" onClick={ () => handleDeleteTask(task.id)}></div>
                </div>
            )}
        </Draggable>
    )
}
