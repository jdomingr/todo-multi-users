import React, { useReducer, useEffect } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { ItemList } from '../list/ItemList';
import { itemReducer } from '../item/itemReducer';
import { taskTypes } from '../../types/taskTypes'
import './listsContainer.css';

export const ListsContainer = ( { id, list, handleUpdateList } ) => {

    const init = () => {
        return [
            {id: '1', content: 'asdasdasd'}
        ];
    }
    
    const [tasks, dispatch] =  useReducer(itemReducer, [], init);

    const handleAddTask = () => {

        const testTask = { id: `${new Date().getTime()}`, content:''};  
        dispatch({type: taskTypes.add ,payload: testTask});
      
    }

    const handleDeleteTask = ( taskId ) => {
        dispatch({type: taskTypes.remove, payload: taskId});
    }

    useEffect( () => {
       
        handleUpdateList(id, tasks);
     
    }, [tasks]);


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

    return (
        <>
        
                <DragDropContext onDragEnd={onDragEnd} key={id}>
                    <Droppable droppableId={id}>
                        {provided => (
                            <div className="list-container" ref={provided.innerRef} {...provided.droppableProps}>
                                <ItemList tasks = { list } handleDeleteTask={handleDeleteTask} handleAddTask={handleAddTask} />
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
        
        
        </>
    )
}
