export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const toggleFavorite = (id: string) => {
  return {type: TOGGLE_FAVORITE, payload: id};
};

export const SET_FILTERS = 'SET_FILTERS';
export const setFilters = (filter: any) => {
  return {type: SET_FILTERS, payload: filter};
};

export const RESET_FILTERS = 'RESET_FILTERS';
export const resetFilters = () => {
  return {type: RESET_FILTERS};
};
