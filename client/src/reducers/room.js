const INITIAL_STATE = {
    rooms: []
}
export default function (
    state = INITIAL_STATE,
    action
){
    console.log("Room Reducer",action.type);
    switch (action.type) { 
        case "SET_ROOMS":
            console.log(action.payload);
            return {...state, rooms: action.payload}
    
        default:
            return state;
    }
}