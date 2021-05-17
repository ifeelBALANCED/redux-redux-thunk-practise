import { getUsers } from '../reducers/userReducer';

export const fetchUsers = () => async dispatch => {
  try {
    const { data: { users } } = await fetch(`https://jsonplaceholder.typicode.com/users`);
    dispatch(getUsers(users));
  } catch (e) {
    console.log(`An error happened ${e.message}`);
  }
};
