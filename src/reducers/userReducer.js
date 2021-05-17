const FETCH_USERS_DATA = 'FETCH_USERS_DATA';

const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_DATA:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    default:
      return state;
  }
};

export const fetchUsersData = (payload) => ({ type: FETCH_USERS_DATA, payload });


