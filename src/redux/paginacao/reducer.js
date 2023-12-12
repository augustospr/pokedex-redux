const initialState = {
  limit: 25
}

const pagination = (state = initialState, action) => {
  if (action.type === 'set/pagination') {
    return { ...state, limit: action.payload }; 
  }
  return state;
}

export default pagination;