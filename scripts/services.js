weatherApp.service('cityService', function () {
    this.city = "Gliwice, Poland";
    var wService = this;

    this.getCity = function () {
        return wService.city;
    };

    this.setCity = function (city) {
        wService.city = city;
    };
});


weatherApp.service('forecastService', ['$resource', function ($resource) {
    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=a8f2eadb9c6675e66fac1b98bd8a73ab", {
        callback: "JSON_CALLBACK"
    }, {
        get: {
            method: "JSONP"
        }
    });

    this.getForecast = function (city, days) {
        return weatherAPI.get({
            q: city,
            cnt: days
        });
    };
}]);
