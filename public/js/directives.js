angular.module('docsTemplateUrlDirective', ['toDoControllers'])
    .directive('taskLine', function() {
        return {
            restrict: 'E',
            scope: {
                content: '=',
                onDel: '&',
                onEdit: '&',
                onSave: '&'
            },
            templateUrl: 'task-line.html'
        };
    })
    .directive('toDoForm', function() {
        return {
            restrict: 'E',
            scope: {
                form: '='
            },
            templateUrl: 'to-do-form.html'
        }
    })
