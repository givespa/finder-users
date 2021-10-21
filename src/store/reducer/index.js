import { LIST_USER } from '../constants';

export default function (state, action) {
    switch (action.type) {
        case LIST_USER:
            return {
                ...state,
                users: action.payload
            };
    
        default:
            return state;
    }
}
