const INITIAL_STATE = {
    rooms: [],
    currentRoom: {messages:[]}
}

export default function (
    state = INITIAL_STATE,
    action
){
   // console.log("Room Reducer",action.type, action.payload);
    switch (action.type) { 
        case "SET_ROOMS":
            return {...state, rooms: action.payload}
 
        case "CURRENT_ROOM":
            return {...state, currentRoom: action.payload}
           
        case "CLEAR_CURRENT_ROOM":
            return {...state, currentRoom: {messages:[]}}
            
            
        case "ADD_MESSAGE":
            return {...state, 
                    currentRoom: {messages: [...state.currentRoom.messages, action.payload]}
                    }

        case "UPDATE_MESSAGES": // may be more than 1 and so the payload is array
            return {...state, 
                    currentRoom: {messages: [...state.currentRoom.messages, ...action.payload]}
                    } 
                                       
        default:
            return state;
    }
}