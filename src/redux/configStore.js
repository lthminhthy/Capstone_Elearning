import thunk from 'redux-thunk'
import { QuanLyKhoaHocReducer } from './reducers/QuanLyKhoaHocReducer';
import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer';


const { combineReducers, createStore, applyMiddleware } = require("redux");

const rootReducer = combineReducers({
QuanLyKhoaHocReducer,
QuanLyNguoiDungReducer,
});

export const store = createStore(rootReducer,applyMiddleware(thunk))