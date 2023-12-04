const initialState = {
  currentStatus: 10,
}

const statusReducer = (state = initialState, action) => {
  if (action.type === 'status/pokemon') {
    return { ...state, currentStatus: 10 };
  }

  return state;
};

export default statusReducer;