import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const weatherForeCast = createReducer({}, {
    [types.SET_WEATHERFORECAST](state, action) {
        console.log("**************** reducers/" + action.type + " ****************");
        return action.weatherForeCast;
    },
});