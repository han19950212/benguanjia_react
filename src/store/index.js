import {createStore,compose} from 'redux';
import reducer from './reducer';
const composeEhancers = window.__REDUX_DEVTOOLS_EXTENSION__() || compose;

const store = createStore(reducer,composeEhancers);

export default store;