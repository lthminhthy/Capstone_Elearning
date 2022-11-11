import thunk from 'redux-thunk'
import { QuanLyKhoaHocReducer } from './reducers/QuanLyKhoaHocReducer';


const { combineReducers, createStore, applyMiddleware } = require("redux");

const rootReducer = combineReducers({
QuanLyKhoaHocReducer,
});

export const store = createStore(rootReducer,applyMiddleware(thunk))