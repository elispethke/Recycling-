import { AppInitialState } from "../AppInitialState";
import { recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from "./login.action";
import { LoginState, } from "./LoginState";
import { createReducer, on } from '@ngrx/store';
import { Action } from '@ngrx/store'; 

const initialState: LoginState = AppInitialState.login;
    

const reducer = createReducer(initialState,
on(recoverPassword, currentState => {
    return {
        ...currentState,
        error: null,
        isRecoveredPassword: false,
        isRecoveringPassword: true
    };
}),

on(recoverPasswordSuccess, currentState => {
    return {
        ...currentState,
        error: null,
        isRecoveredPassword: true,
        isRecoveringPassword: false
    };
}),

on(recoverPasswordFail, (currentState, action) => {
    return {
        ...currentState,
        error: action.error,
        isRecoveredPassword: false,
        isRecoveringPassword: false
    };
}),
 )

 export function loginReducer(state: LoginState, action: Action) {
    return reducer(state, action);
  }  
