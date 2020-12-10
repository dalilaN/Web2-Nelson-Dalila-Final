import { applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';

//Redux Dev Tools

const enhancers = 
    typeof window === 'object' &&
    window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__({name: 'Pardon My Frenchie'}) :
    compose;

const composeEnhancers = enhancers(
    applyMiddleware(ReduxThunk),
);

export default composeEnhancers;
