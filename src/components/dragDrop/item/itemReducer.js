import { taskTypes } from '../../types/taskTypes';


export const itemReducer = ( state = [], action) => {
    switch( action.type ){

        case taskTypes.add:
            return [...state, action.payload];

        case taskTypes.remove:
            return state.filter( task => task.id !== action.payload);
        
        case taskTypes.update:
            return state.map( task => (task.id === action.payload) ? {...task, content: 'test' } : task);

        case taskTypes.reordered:
            return [...action.payload]

        default:
            return state;

    }
}