const INITIAL_STATE = {
    authenticated: '',
    errorMessage: '',
    screenName: '',
    userId: 0
}
export default function (
    state = INITIAL_STATE,
    action
){
    console.log("User Reducer",action);
    switch (action.type) { 
        case "LOGIN_USER":
            return {...state, errorMessage: "", 
                authenticated: action.token, userId: action.id, screenName: action.screenName}
        default:
            return state;
    }
}