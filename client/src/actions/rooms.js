
function handleAPIErrors(res) {
    // this is needed to catch 404, 500 errors, etc.
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res;   
}

export function getRooms() {
    console.log("Get Rooms Action");    
    return (dispatch) => {
        let token = localStorage.getItem("token");                     
        fetch(`/rooms`, 
                { headers: new Headers({
                    'Authorization': `${token}`, 
                    'Content-Type': 'application/json'
                    })
                })
            .then(res => handleAPIErrors(res))        
            .then(res => res.json())
            .then (res =>{                
                dispatch({type:"SET_ROOMS", payload: res});
            })
            .catch(function(error) {
                console.log("Rooms Error",error);
            })             
    };
}

export function getRoom(roomId, callback) {
    console.log("Get Room",roomId);    
    return (dispatch) => {
        let token = localStorage.getItem("token");              
        fetch(`/rooms/${roomId}`, 
                { 
                  headers: new Headers({
                    'Authorization': `${token}`, 
                    'Content-Type': 'application/json'
                    })                  
                })
            .then(res => handleAPIErrors(res))        
            .then(res => res.json())
            .then (res =>{                
                dispatch({type:"CURRENT_ROOM", payload: res});
                callback();
            })
            .catch(function(error) {
                console.log("Room Error",error);
            })             
    };
}

export function getMessageUpdates(roomId, lastMessage) {
    console.log("Get Updates",roomId, lastMessage.id);    
    return (dispatch) => {
        let token = localStorage.getItem("token");              
        fetch(`/rooms/${roomId}/updates/${lastMessage.id}`, 
                { 
                  headers: new Headers({
                    'Authorization': `${token}`, 
                    'Content-Type': 'application/json'
                    })                  
                })
            .then(res => handleAPIErrors(res))        
            .then(res => res.json())
            .then (res =>{     
                console.log("Have updates", res, res.length); 
                if (res.length > 0)          
                    dispatch({type:"UPDATE_MESSAGES", payload: res});
            })
            .catch(function(error) {
                console.log("Message Update Error",error);
            })             
    };
}

export function addMessage(params) {
    console.log("add message",params);  
    return (dispatch) => {
        let token = localStorage.getItem("token");  
        const request = {
            "message": {"content": params.content, "user_id": params.userId, "room_id": params.roomId}
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(request),
            headers: new Headers({
                'Authorization': `${token}`, 
                'Content-Type': 'application/json'
            })
        };
        fetch(`/rooms/${params.roomId}/messages`, options)
            .then(res => handleAPIErrors(res))        
            .then(res => res.json())            
            .then (res =>{                  
                dispatch({type:"ADD_MESSAGE", payload:res});
            })
            .catch(function(error) {
                console.log("Add Message Error",error);
            });             
    };
}
