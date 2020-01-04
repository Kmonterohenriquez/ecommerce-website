import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'react-thunk';

const rootReducer = combineReducers => ({});

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
