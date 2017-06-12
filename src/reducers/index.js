import { combineReducers } from 'redux';
import SampleReducer from './SampleReducer';

const rootReducer = combineReducers({
    someStateVariable: SampleReducer
});

export default rootReducer;
