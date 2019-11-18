import {FETCH_USERS,NEW_USER} from './type';
import axios from 'axios';

export const fetchUsers = () => dispatch => {    
        axios.get('http://localhost:3001/users')
        .then(data => dispatch({
                type: FETCH_USERS,
                payload: data
            })
        )
    
};

export const createUser = (userData) => dispatch => {    
    axios.post('http://localhost:3001/users',userData)
              .then(userData => dispatch({
                  type: NEW_USER,
                  payload: userData
              }))
              .catch(err => {
                  console.log(err);
              });

}