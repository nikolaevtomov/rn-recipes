import {TOGGLE_FAVORITE} from '../actions';

const initialState: Array<string> = [];

const favoritesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_FAVORITE: {
      if (!state.includes(action.payload)) {
        return state.concat(action.payload);
      } else {
        return [...state.filter((item: string) => action.payload !== item)];
      }
    }

    default:
      return initialState;
  }
};

export default favoritesReducer;
