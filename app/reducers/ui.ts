const initialState: string = 'UI';

const uiReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ANY':
      return state;

    default:
      return initialState;
  }
};

export default uiReducer;
