import { LIST_USER } from '../constants';

export function addUser(data) {
    return (dispatch) => {
        dispatch({ type: LIST_USER, payload: data });
    }
}

export function deleteUsers() {
    return (dispatch) => {
        dispatch({ type: LIST_USER, payload: [] });
    }
}