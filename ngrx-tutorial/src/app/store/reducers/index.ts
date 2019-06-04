/*
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromAuth from './auth.reducer';

export interface State {

  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {

  auth: fromAuth.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
*/

import { 
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromAuth from './auth.reducer';
 
export interface State {
  auth: fromAuth.State;
}
 
export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer
};

export const selectAuthState = createFeatureSelector<fromAuth.State>('auth');
export const getUserName = createSelector(selectAuthState, fromAuth.getUserName);
export const getFriendlyName = createSelector(selectAuthState, fromAuth.getFriendlyName);
/**
 * It’s convention to put the selectors that everyone uses in the main 
 * reducer.  For feature modules, you’ll do it in the feature module’s 
 * main reducer (that’s a future post).  These selectors are the way for 
 * the consumer (usually components) to access a slice of state in the store.
 * It seems like a lot of busy work (and it is) but we do it this way so 
 * that it can be easily unit tested in one spot (the reducers) and easily 
 * consumed from the components.
 * 
 * Notes:
 * createFeatureSelector and createSelector are imported from ‘@ngrx/store’
 * selectAuthState:  this creates a feature selector of type fromAuth.State (the state in the auth reducer)
 * The ‘auth’ string must match the property in state
 * This will be used to get the auth State for the upcoming createSelector functions
 * getUserName:  this creates a selector using selectAuthState and our getUserName selector we defined above
 * getFriendlyName:  this creates a selector using selectAuthState and our getFriendlyName selector we defined above
 */