import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { ItemList } from '../dragDrop/list/ItemList';
import './list.css';

export const Dashboard = () => {

    const initialTasks  = [
        {id:'1', content: 'Este es un test'},
        {id:'2', content: 'Aprender Inglés'},
        {id:'3', content: 'Aprender React'},
        {id:'4', content: 'Tratar de superarme'},
    ];
    const [tasks, setTasks] = useState(initialTasks);

    const handleAddTask = () => {
        //I must fix this
        const testTask = { id: '5', content:'List Tasks'}
        setTasks([...tasks, testTask]);
    }

    const reorderTasks = ( tasks, sourceIndex, destinationIndex) => {
        const reorderedTasks = Array.from(tasks);
        const [ removed ] = reorderedTasks.splice(sourceIndex ,1);
        reorderedTasks.splice(destinationIndex, 0, removed);
        return reorderedTasks;
     
    }

    const onDragEnd = (result) => {

        if(!result.destination){
            return;
        }

        if(result.destination.index === result.source.index){
            return;
        }
        
        const aux = reorderTasks( tasks, result.source.index, result.destination.index);
        
        setTasks(aux);
    }

    return(
        <div>
            <h1>Dashboard</h1>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="list">
                    {provided => (
                        <div className="list-container" ref={provided.innerRef} {...provided.droppableProps}>
                            <ItemList tasks = { tasks }/>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <button onClick = { handleAddTask }>Add task</button>
            {/* <div className="row">
                <div className="col-sm-4">
                    <ul className="list-group">
                        <li className="list-group-item">Test 1</li>
                        <li className="list-group-item">Test 2</li>
                        <li className="list-group-item">Test 3</li>
                        <li className="list-group-item">Test 4</li>
                    </ul>
                </div>
                <div className="col-sm-4">
                    <ul className="list-group">
                        <li className="list-group-item">Test 1</li>
                        <li className="list-group-item">Test 2</li>
                        <li className="list-group-item">Test 3</li>
                        <li className="list-group-item">Test 4</li>
                    </ul>
                </div>
                <div className="col-sm-4">
                    <ul className="list-group">
                        <li className="list-group-item">Test 1</li>
                        <li className="list-group-item">Test 2</li>
                        <li className="list-group-item">Test 3</li>
                        <li className="list-group-item">Test 4</li>
                    </ul>
                </div>
                
            </div> */}
        </div>
    );
}