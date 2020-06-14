export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const toggleFavorite = (id: string) => {
  return {type: TOGGLE_FAVORITE, payload: id};
};

export const SET_FILTERS = 'SET_FILTERS';
export const setFilters = (filterSettings: any) => {
  return {type: SET_FILTERS, payload: filterSettings};
};
