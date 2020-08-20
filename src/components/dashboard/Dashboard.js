import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { ItemList } from '../dragDrop/list/ItemList';
import './list.css';

export const Dashboard = () => {

    const onDragEnd = (result) => {

        if(!result.destination){
            return;
        }

        if(result.destination.index === result.source.index){
            return;
        }
    }

    return(
        <div>
            <h1>Dashboard</h1>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="list">
                    {provided => (
                        <div className="list-container" ref={provided.innerRef} {...provided.droppableProps}>
                            <ItemList />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
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