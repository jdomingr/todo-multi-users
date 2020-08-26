import React, { useState, useReducer, useEffect } from 'react';
import './list.css';
import { itemReducer } from '../dragDrop/item/itemReducer';
import { taskTypes } from '../types/taskTypes';
import { ListsContainer } from '../dragDrop/listContainer/ListsContainer';

export const Dashboard = () => {

    
   
    const initialListState = [ 
        {
            id: '1', //`${new Date().getTime()}`
            tasks: []
        },
     ];

    const [list, setList] = useState(initialListState);

    
  
    return(
        <div className="main-container">
            <h1 className="h1-title">Dashboard</h1>
            <div className="container-dashboard">
               <ListsContainer list = {list} setList = {setList} />
                
            </div>
            

        </div>
    );
}