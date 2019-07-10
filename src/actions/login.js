// import React from 'react';

function loginReducer(state,action){
    switch (action.type) {
        case 'field': {
        return{
            ...state,
            [action.fieldName]: action.payload
            };
        }
        case 'success': {
            return {
                ...state,
                loggedIn:true,
                isLoading:false
            };
        }
        case 'login': {
            return{
                ...state,
                error:'',
                isLoading:false,
            };
        }
        case 'error': {
            return{
                ...state,
                errorMessage : 'please enter valid username or password',
                loggedIn:false,
                isLoading:false,
                username:'',
                password:''
            };
        }
        case 'logout': {
            return{
                ...state,
                loggedIn:false,
                username:'',
                password:''
            };
        }
        default:
            return state;
        }
}

export default loginReducer;
