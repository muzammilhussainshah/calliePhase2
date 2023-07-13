import rootReducer from './reducer';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// import { legacy_createStore as createStore} from 'redux'


import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);

export default store;