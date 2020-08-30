import { listTypes } from "../types/listTypes";

export const listReducer = ( state = [], action ) => {

    switch (action.type) {

        case listTypes.add:
            if(state.length < 3){
                return [...state, action.payload];
            }
            return state;
            
    
        case listTypes.remove:
            return state.filter(item => item.id !== action.payload);
        
        case listTypes.update:
            return state.map( item => (item.id === action.payload.id) ? {...item, tasks: action.payload.task}  : item );

        default:
            return state;
    }
}