import React, { useReducer } from 'react';
import { ListsContainer } from '../dragDrop/listContainer/ListsContainer';
import { listTypes } from '../types/listTypes';
import { listReducer } from './listReducer';
import './list.css';

export const Dashboard = () => {

    const init = () => {
        return [
            {
                id: `${new Date().getTime()}`,
                tasks: []
            },
        ];
    }

    const [lists, dispatch] = useReducer(listReducer, [], init);
   
  
    const handleAddList = () => {
        const test = {id: `${new Date().getTime()}`,
        tasks: [] }
        dispatch({ type: listTypes.add, payload: test});
    }

    const handleUpdateList = ( id, task) => {
        const listUpdated = { id , task};
        dispatch({ type: listTypes.update, payload: listUpdated});
    }

    const handleRemoveList = ( id ) => {
        dispatch({type: listTypes.remove, payload: id});
    }

    return(
        <div className="main-container">
            <h1 className="h1-title">Dashboard</h1>
            <div className="container-default">
            <button className="btn-add-list" onClick={ handleAddList }>Add list</button>
            </div>
            
            <div className="container-dashboard">
                { lists.map( list => (
                    <ListsContainer key={list.id} 
                    id_list = {list.id}
                    list = {list.tasks}
                    handleUpdateList = { handleUpdateList }
                    handleRemoveList = { handleRemoveList }   />
                ))}
               
            </div>
        </div>
    );
}