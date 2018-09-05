import * as types from './types'

export function setMessage(message) {
    console.log("**************** actions/setMessage(" + message + ") ****************");
    return {
        type: types.SET_MESSAGE,
        message,
    }
}