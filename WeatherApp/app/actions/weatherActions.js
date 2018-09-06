import * as types from './types'
import WeatherApi from '../api/OpenWeatherApi'

export function getWeatherByCityName(cityName) {
    console.log("**************** actions/getWeatherByCityName() ****************");
    return (dispatch, getState) => {
        return WeatherApi.getWeatherByCityName(cityName)
        .then(
            response => {
            console.log(response);
            dispatch(setWeatherForeCast(response));
        })
    }
}

export function getWeatherByCoordinates(latitude, longitude) {
    console.log("**************** actions/getWeatherByCoordinates() ****************");
    return (dispatch, getState) => {
        return WeatherApi.getWeatherByCoordinates(latitude, longitude)
        .then(
            response => {
            console.log(response);
            dispatch(setWeatherForeCast(response));
        })
    }
}

export function setWeatherForeCast(weatherForeCast) {
    console.log("**************** actions/setWeatherForeCast() ****************");
    console.log(weatherForeCast);
    return {
        type: types.SET_WEATHERFORECAST,
        weatherForeCast,
    }
}