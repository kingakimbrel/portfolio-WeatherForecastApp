weatherApp.directive('weatherReport', function(){
    return{
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/weatherReport.html',
        scope:{
            wDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@",
            selectedTempUnit:"=",
        }
    }
});