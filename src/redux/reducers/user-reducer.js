const initialState = {
  username: ''
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        username: action.payload.username
      };
  
    default:
      return state;
  }
}
