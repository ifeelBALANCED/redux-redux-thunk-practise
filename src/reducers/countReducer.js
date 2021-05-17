const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';


const initialState = {
  count: 0,
};

export const countReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return state;
  }
};


export const increment = (count) => ({ type: INCREMENT, payload: count });
export const decrement = (count) => ({ type: DECREMENT, payload: count });
