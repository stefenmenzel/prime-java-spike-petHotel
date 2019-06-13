import { combineReducers } from 'redux';
import petReducer from './petReducer';
import ownerReducer from './ownerReducer.js';

const rootReducer = combineReducers({ 
    petReducer,
    ownerReducer,
});

export default rootReducer;