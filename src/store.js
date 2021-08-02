import { createStore } from 'redux';
import reducer from './reducers';

const store = new createStore(reducer);

export default store;