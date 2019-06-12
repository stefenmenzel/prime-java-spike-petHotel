import { combineReducers } from 'redux';
import petReducer from './petReducer';

const rootReducer = combineReducers({ 
    petReducer
});

export default rootReducer;