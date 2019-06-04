/*
import { Action } from '@ngrx/store';


export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
*/
import * as authActions from '../actions/auth.actions';
 
export interface State {
  userName?: string;
  friendlyName?: string;
}
 
export const initialState: State = {
  userName: null,
  friendlyName: null
};
 
export function reducer(state = initialState, action: authActions.AuthActions): State {
  switch (action.type) {
    case authActions.AuthActionTypes.SetAuths:
      return handleSetAuths(state, action);
 
    default:
      return state;
  }
}
 
function handleSetAuths(state: State, action: authActions.SetAuths): State {
  return {
    ...state,
    // userName: action.payload
    userName: action.payload.userName,
    friendlyName: action.payload.friendlyName
  };
}

/**
 * Now I’m ready to add selectors to this reducer.  
 * Selectors help us get at the data in the store by using pure functions 
 * and keeping most of the logic on the store instead of in the components.  
 * The first step with selectors is to add selectors in your reducer for 
 * each property of state as follows:
 */

export const getUserName = (state: State) => state.userName;
export const getFriendlyName = (state: State) => state.friendlyName;

/**
 * Notes:
 * The userName property is added to State and initialState (not necessary for initialState of course)
 * In the ‘reducer’ function, the action is changed to authActions.AuthActions (which is the exported type AuthActions)
 * The case statement is added for SetAuths
 * I like to add a function to handle each action so the switch doesn’t get so huge and ugly
 * The handleSetAuths function returns a new copy of state
 * The …state spread operator basically copies existing state
 * userName: action.payload then overwrites the userName property of State (which is the only one at this time, but more should be added)
 */