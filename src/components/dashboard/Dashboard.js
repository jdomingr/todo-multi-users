import React, { useReducer } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { ItemList } from '../dragDrop/list/ItemList';
import './list.css';
import { itemReducer } from '../dragDrop/item/itemReducer';
import { taskTypes } from '../types/taskTypes';

export const Dashboard = () => {

    const initialTasks  = [
        {id:'1', content: 'Este es un testsssssssssss asdddddddddddddddddddd asddddddddddddddddddddddd asdddddddd asdasdasd'},
        {id:'2', content: 'Aprender Inglés'},
        {id:'3', content: ''},
        {id:'4', content: ''},
    ];
    

    const init = () => {
        return initialTasks;
    }
    const [tasks, dispatch] =  useReducer(itemReducer, [], init);

    const handleAddTask = () => {

        const testTask = { id: `${new Date().getTime()}`, content:''};  
        dispatch({type: taskTypes.add ,payload: testTask})
    }

    const handleDeleteTask = ( taskId ) => {
        dispatch({type: taskTypes.remove, payload: taskId});
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
        
        const newTasksArray = reorderTasks( tasks, result.source.index, result.destination.index);
        
        dispatch({type: taskTypes.reordered ,payload: newTasksArray})
    }

    return(
        <div className="main-container">
            <h1 className="h1-title">Dashboard</h1>
            <div className="container-dashboard">
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="list">
                        {provided => (
                            <div className="list-container" ref={provided.innerRef} {...provided.droppableProps}>
                                <ItemList tasks = { tasks } handleDeleteTask={handleDeleteTask} handleAddTask={handleAddTask} />
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
            

        </div>
    );
}