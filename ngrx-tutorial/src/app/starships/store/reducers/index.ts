import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
 
import * as fromShips from './ships.reducer';
import * as fromRoot from '../../../store/reducers';
 
export interface StarshipsState {
  ships: fromShips.State;
}
 
export interface State extends fromRoot.State {
  ships: StarshipsState;
}
 
export const reducers: ActionReducerMap<StarshipsState> = {
  ships: fromShips.reducer
};

/*
These are the important points:

Created interface StarshipsState – this will hold all of the different 
  states in the different reducers we may create in this feature module
Created an ActionReducerMap of StarshipsState – this will define the 
  reducers that correspond to the properties in StarshipsState
Created interface State that extends root or main State – this is the one 
  that will be referred to in our components in this feature module and will allow us to see state from the app.module level
Note you still can’t see state from other feature modules
We won’t add any more code to this state as all additional state/reducers 
  will be added to StarshipsState
*/

export const selectStarshipsState = createFeatureSelector<StarshipsState>('starships');
 
export const selectShips = createSelector(selectStarshipsState, (state) => state.ships);
export const getAllShips = createSelector(selectShips, fromShips.getAllShips);

/*
The ‘starships’ in the State interface must match the ‘starships’ 
in the selectStarshipsState selector

And it must match the forFeature declaration in the feature module

Note that the “createFeatureSelector” command doesn’t match (as of 8/18/2018)
what is in the NgRx example app

That’s because it is a future thing that we don’t yet have access to 
(see Stack Overflow)

selectShips gets the ‘ships’ property of StarshipsState

getAllShips then just gets the allShips property of fromShips.State
*/