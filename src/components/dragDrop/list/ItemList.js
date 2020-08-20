import React from 'react'
import { DraggableItem } from '../item/DraggableItem';

export const ItemList = () => {

    const tasks = [
        {id:'1', content: 'Este es un test'},
        {id:'2', content: 'Aprender Inglés'},
        {id:'3', content: 'Aprender React'},
        {id:'4', content: 'Tratar de superarme'},
    ];
    return tasks.map( (task, index) => (
        <DraggableItem task={ task } id={ index } key = {task.id} />
    ));
}
