import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
// import { reducers } from '../reducers';
import { userReducer } from '../reducers/userInfo';

export const store = createStore(
  userReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
