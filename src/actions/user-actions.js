import $ from 'jquery';


export function updateUser(newUser) {
    return {
        type: 'UPDATE_USER',
        payload: {
            user: newUser
        }
    }
}

export function showError() {
    return {
        type: 'API_REQUEST_ERROR',
        payload: {
            user: 'ERROR!!'
        }
    }
}

export function apiRequest() {
 return dispatch => {

 $.ajax({
     url: 'http://google.com',
     success(response) {
         console.log('SUCCESS');
         dispatch(updateUser(response.newUser));
     },
     error() {
         console.log('ERROR');
         dispatch(showError());
     }
 })  
 }
}