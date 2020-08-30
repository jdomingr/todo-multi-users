import React, { useState, useReducer, useEffect } from 'react';
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



    useEffect( () => {
        console.log(lists)
    }, [lists]);
  
    return(
        <div className="main-container">
            <h1 className="h1-title">Dashboard</h1>
            <div className="container-dashboard">
                { lists.map( list => (
                    <ListsContainer key={list.id} id = {list.id} list = {list.tasks} handleUpdateList = {handleUpdateList} />
                ))}
               
                
            </div>
            <button onClick={ handleAddList }>Hit me</button>
            

        </div>
    );
}