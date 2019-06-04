/*
  Import createSelector from reselect to make selection of different parts of the state fast efficient
 */
import { createSelector } from "reselect";
/*
  Import the store logger to log all the actions to the console
 */
import { storeLogger } from "ngrx-store-logger";

/*
 Import the layout state
 */

import * as fromLayout from "./layout/layout.reducer";
import { compose } from "@ngrx/core";
import { combineReducers } from "@ngrx/store";

export interface AppState {
  reducer: {
    layout: fromLayout.State;
  };
}
export const reducers = {
  layout: fromLayout.reducer
};

const developmentReducer: Function = compose(storeLogger(), combineReducers)(
  reducers
);

export function metaReducer(state: any, action: any) {
  return developmentReducer(state, action);
}

/**
 * Layout selectors
 */

export const getLayoutState = (state: AppState) => state.reducer.layout;

//...
export const getLayoutOpenedModalName = createSelector(
  getLayoutState,
  fromLayout.getOpenedModalName
);

/**
  * Creating the meta reducer
  * With the UI state ready, the last step is to add the meta reducer, 
  * which will eventually be bootstrapped with the StoreModule provided by 
  * @ngrx/store. 
 */

/**
 * The currently modal's name will be stored in the openedModalName 
 * which will be set and unset according to the dispatched action. 
 * A selector getOpenedModalName is needed to easily access the 
 * openedModalName property within the state. In index.ts, add a selector 
 * to access the openedModalName property from the application state: 
 * index.ts
 */