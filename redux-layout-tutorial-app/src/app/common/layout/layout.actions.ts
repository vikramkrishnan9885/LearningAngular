// To structure the application's files properly, 
// all the redux-related files will stay in src/app/common directory.

// Create common/layout directory which is going to contain all actions, 
// effects, and the reducer of the layout sate.

// The layout actions will be dispatched every time when an user action is 
// made (closing and opening sidebar, opening a modal and so on) or when 
// certain events happen (window resizing).

import { Action } from "@ngrx/store";

/*
 Layout actions are defined here
 */

//export const LayoutActionTypes = {};

/*
 The action classes will be added here once they are defined
*/
//export type LayoutActions = null;

export const LayoutActionTypes = {
    OPEN_MODAL: "[Layout] Open modal",
    CLOSE_MODAL: "[Layout] Close modal"
};

/*
Modal actions
*/
export class OpenModalAction implements Action {
    type = LayoutActionTypes.OPEN_MODAL;
    constructor(public payload: string) {}
}

export class CloseModalAction implements Action {
    type = LayoutActionTypes.CLOSE_MODAL;
    constructor(public payload: string) {}
}

export type LayoutActions = CloseModalAction | OpenModalAction;

/**
 * Modals
 * The easiest way to implement a modal in the state is to keep its 
 * name as an identifier. Since only one modal can be opened at a time 
 * in the UI view (unless you're trying to do some kind of black magic), 
 * every modal can be referenced by a modalName.
 */