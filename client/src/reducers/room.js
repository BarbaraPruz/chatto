const INITIAL_STATE = {
    rooms: [],
    currentRoom: {messages:[]}
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
 
        case "CURRENT_ROOM":
            console.log(action.payload);
            return {...state, currentRoom: action.payload}
            
        case "ADD_MESSAGE":
            console.log(action.payload);
            return {...state, 
                    currentRoom: {messages: [...state.currentRoom.messages, action.payload]}
                    }
            
        default:
            return state;
    }
}