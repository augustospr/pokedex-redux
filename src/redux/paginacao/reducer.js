const initialState = {
  limit: 25,
  offset: 1
}

const pagination = (state = initialState, action) => {
  if (action.type === 'set/pagination') {
    return { ...state, state: action.payload };
  }
  return state;
}

export default pagination;