import {FETCH_USERS,NEW_USER} from '../actions/type';

const initialState ={
    items: [],
    item: {}
}
export default function(state = initialState,action){
    switch(action.type){
        case FETCH_USERS: 
            return {
                ...state,
                items: action.payload.data
            }
        case NEW_USER:
            return {
                ...state,
                item: action.payload.data
            }
        default:
            return state;
    }
}