import { fetchUsersData } from '../reducers/userReducer';
import axios from 'axios';

export const fetchUsers = () => async dispatch => {
  try {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    dispatch(fetchUsersData(data))
  } catch ({ message }) {
    console.log(`An error occurred - ${message}`);
  }
};
