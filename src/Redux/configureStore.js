import { createStore } from 'redux';
import combinedReducers from './combinedReducers';
import composeEnhancers from './composeEnhancers';

const configureStore = () => {
    return createStore(combinedReducers, composeEnhancers);
}

export default configureStore;