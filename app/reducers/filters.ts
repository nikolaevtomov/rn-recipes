import {SET_FILTERS, RESET_FILTERS} from '../actions';

export enum FILTER_ENUM {
  isGlutenFree = 'isGlutenFree',
  isVegan = 'isVegan',
  isVegetarian = 'isVegetarian',
  isLactoseFree = 'isLactoseFree',
}

const initialState: Array<FILTER_ENUM> = [];

const filtersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_FILTERS:
      if (!state.includes(action.payload)) {
        return state.concat(action.payload);
      } else {
        return [
          ...state.filter((item: FILTER_ENUM) => action.payload !== item),
        ];
      }

    case RESET_FILTERS:
      return initialState;

    default:
      return initialState;
  }
};

export default filtersReducer;
