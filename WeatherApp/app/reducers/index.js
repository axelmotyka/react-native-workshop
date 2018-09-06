import {
    combineReducers
} from 'redux';
import * as weatherReducer from './weatherReducer.js'

export default combineReducers(Object.assign(
    weatherReducer
));