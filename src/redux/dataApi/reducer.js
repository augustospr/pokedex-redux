const initialState = {
  posts: []
}

const dataFromApi = (state = initialState, action) => {
  if (action.type === 'api/data') {
    return {
      posts: []
    };
  }
  return state;
}