export enum KeyKinda {
  isGlutenFree = 'isGlutenFree',
  isVegan = 'isVegan',
  isVegetarian = 'isVegetarian',
  isLactoseFree = 'isLactoseFree',
}

const initialState: Array<string> = [
  'isGlutenFree',
  'isVegan',
  'isVegetarian',
  'isLactoseFree',
];

const filtersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ANY':
      return state;

    default:
      return initialState;
  }
};

export default filtersReducer;
