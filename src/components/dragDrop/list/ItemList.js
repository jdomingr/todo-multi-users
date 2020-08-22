import React from 'react'
import { DraggableItem } from '../item/DraggableItem';

export const ItemList = ( {tasks} ) => {

    
    return tasks.map( (task, index) => (
        <DraggableItem task={ task } id={ index } key = {task.id} />
    ));
}
