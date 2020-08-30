import { listTypes } from "../types/listTypes";

export const listReducer = ( state = [], action ) => {

    switch (action.type) {
        case listTypes.add:

            return [...state, action.payload];
    
        case listTypes.remove:
            return state.filter(item => item.id !== action.paylaod);
        
        case listTypes.update:
            return state.map( item => (item.id === action.payload.id) ? {...item, tasks: action.payload.task}  : item );

        default:
            return state;
    }
}