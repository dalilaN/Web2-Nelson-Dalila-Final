import { combineReducers } from 'redux';
import pupsReducer from './pups/reducers.js'

const combinedReducers = combineReducers({
    pups: pupsReducer,
});

export default combinedReducers;