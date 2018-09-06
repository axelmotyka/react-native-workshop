import ApiUtils from './ApiUtils'

class OpenWeatherApi {

    static API_KEY = "ba6ce574724c38f11f67d9a1a9b7a0ef"

    static getWeatherByCityName(cityName) {
        let params = [
            'APPID=' + this.API_KEY,
            'q=' + encodeURIComponent(cityName)
        ].join('&');
        return this.get(params);
    }

    static getWeatherByCoordinates(latitude, longitude) {
        let params = [
            'APPID=' + this.API_KEY,
            'lat=' + encodeURIComponent(latitude),
            'lon=' + encodeURIComponent(longitude)
        ].join('&');
        return this.get(params);
    }

    static get( params) {
        return this.xhr(params, 'GET');
    }

    static xhr(params, requestMethod) {
        console.log("**************** OpenWeatherApi.xhr ****************");
        const host = 'https://api.openweathermap.org/data/2.5/weather';
        const url = `${host}?${params}`;
        let options = Object.assign(
            { method: requestMethod }
        );

        return fetch(url, options)
            .then(ApiUtils.checkStatus)
            .then(response => response.json())
            .catch( (ex) => {
                console.log(ex);
            });
    }
}
export default OpenWeatherApi
