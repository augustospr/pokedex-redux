const initialState = {
  posts: 10
}

const dataFromApi = (state = initialState, action) => {
  if (action.type === 'api/data') {
    return { ...state, posts: 20 };
  }

  return state;
}

export default dataFromApi;