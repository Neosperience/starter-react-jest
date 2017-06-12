import { SOME_ACTION_TYPE } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case SOME_ACTION_TYPE: // check if action is of required type
            return action.payload.data;
        default:
            return state; // return passed state otherwise
    }
}
