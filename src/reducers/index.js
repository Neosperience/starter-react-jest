import { combineReducers } from 'redux';
import SampleReducer from './SampleReducer';

const rootReducer = combineReducers({
    someState: SampleReducer
});

export default rootReducer;
