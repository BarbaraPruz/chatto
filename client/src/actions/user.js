
function handleAPIErrors(res) {
    // this is needed to catch 404, 500 errors, etc.
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res;   
}

export function loginUser(credentials,callback) {
    console.log("Action Login User!",credentials);    
    return (dispatch) => {

        const request = {"user": {"email": credentials.email, "password": credentials.password}}
        const options = {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
              'Content-Type': 'application/json'
            }
        };
        let auth;

        console.log("Login Request",request)
        fetch("/login", options)
            .then(res => handleAPIErrors(res))        
            .then(res => {
                auth = res.headers.get('authorization');          
                return res.json()            
            })
            .then (res =>{
                console.log("setting jwt",auth);
                localStorage.setItem("token", auth);                   
                dispatch({type:"LOGIN_USER", token:auth, id: res.id, screenName: res.screen_name });
                callback();
            })
            .catch(function(error) {
                console.log("Login Error",error);
            });             
    };
}

export function logoutUser(callback) {
    return (dispatch) => {
        const token = localStorage.getItem("token");
        const options = {
            method: 'DELETE',
            headers: new Headers({
                'Authorization': `${token}`, 
                'Content-Type': 'application/json'
            })
        };           
        fetch("/logout", options)
            .then(res => handleAPIErrors(res))         
            .then(res => {
                localStorage.removeItem('token');
                dispatch({type: "LOGOUT_USER"});
                callback();
        }).catch(function(error) {
            console.log(error);     
        })        
    }
}    

