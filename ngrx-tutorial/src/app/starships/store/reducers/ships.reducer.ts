
import { ShipsActions, ShipsActionTypes ,SetShips, LoadShips } from '../actions/ships.actions';

export interface State {
  allShips: any[];
}

export const initialState: State = {
  allShips: []
};

export function reducer(state = initialState, action: ShipsActions): State {
  switch (action.type) {

    case ShipsActionTypes.LoadShips:
      return handleSetShips(state, action);

    default:
      return state;
  }
}

function handleSetShips(state, action: SetShips): State {
  return {
    ...state,
    allShips: action.payload
  }
}


export const getAllShips = (state: State) => state.allShips;