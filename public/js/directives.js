angular.module('docsTemplateUrlDirective', [])
    .directive('taskLine', function() {
        return {
            require: '^toDo',
            restrict: 'E',
            transclude: true,
            scope: {
                onDel: '&',
                onEdit: '&',
                deadline: '=',
                done: '='
            },
            templateUrl: 'task-line.html',
            replace: true
        };
    })
    .directive('toDoForm', function() {
        return {
            require: '^toDo',
            restrict: 'E',
            scope: {
                form: '='
            },
            templateUrl: 'to-do-form.html'
        }
    })
    .directive('editTaskLine', function(){
        return {
            require: '^toDo',
            restrict: 'E',
            transclude: true,
            scope: {
                deadline: '=',
                text: '=',
                onSave: '&'
            },
            templateUrl: 'edit-task-line.html'
        }
    })
    .directive('toDo', function(){
        return {
            controller: 'ToDoCtrl',
            restrict: 'E',
            scope: {},
            templateUrl: 'to-do.html'
        }
    })
    
