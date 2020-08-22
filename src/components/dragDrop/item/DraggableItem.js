import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './item.css';
export const DraggableItem = ( {task, id }) => {
    return (
        <Draggable draggableId={ task.id} index={id}>
            { provided => (
                <div className="draggable-item" ref= {provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    {task.content}
                    <div className="closable-item"></div>
                </div>
            )}
        </Draggable>
    )
}
