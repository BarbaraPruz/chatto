
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
                console.log("setting jwt",auth);
                localStorage.setItem("jwt", auth); // TODO: move to reducer?            
                return res.json()            
            })
            .then (res =>{
                console.log("Result",res);
                dispatch({type:"LOGIN_USER", token:auth, id: res.id, screenName: res.screen_name });
                callback();
            })
            .catch(function(error) {
                console.log("Login Error",error);
            });             
    };
}

