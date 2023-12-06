const initialState = {
  posts: []
}

const dataFromApi = (state = initialState, action) => {
  if (action.type === 'api/data') {
    return { ...state, posts: action.payload };
  }

  return state;
}

export default dataFromApi;