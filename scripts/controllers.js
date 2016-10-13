weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {
    $scope.city = cityService.getCity();

    $scope.$watch('city', function () {
        cityService.setCity($scope.city);
    });

    $scope.submit = function () {
        $location.path("/forecast");
    }
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', 'forecastService', function ($scope, $resource, $routeParams, cityService, forecastService) {
    $scope.DAYS = ['2', '5', '7', '15'];
    $scope.tempUnits = ['F', 'C'];
    $scope.selectedTempUnit = $scope.tempUnits[0];

    $scope.city = cityService.getCity();
    $scope.days = $routeParams.days || '2';

    $scope.weatherResult = forecastService.getForecast($scope.city, $scope.days);

    $scope.convertToFahrenheit = function (degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    }

    $scope.convertToCelsius = function (degK) {
        return Math.round((degK - 273));
    }

    $scope.convertToStandard = function (tempUnit, degK) {
        $scope.selectedTempUnit = tempUnit;
        if (tempUnit === 'F') {
            return $scope.convertToFahrenheit(degK);
        } else {
            return $scope.convertToCelsius(degK);
        }
    };

    $scope.convertToDate = function (dt) {
        return new Date(dt * 1000);
    }
}]);
