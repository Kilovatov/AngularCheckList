var toDoControllers = angular.module('toDoControllers', [])

.controller('ToDoCtrl', ['$scope', function($scope) {

    $scope.formItems = [{
    	name: 'task',
        type: 'text',
        value: '',
        required: 'required'
    }, {
    	name: 'deadline',
        type: 'date',
        value: '',
        required: ""
    } ];

    $scope.deadlineCondition = function (deadline) {
        return function(task) {
            if (task.deadline < deadline && new Date(task.deadline) > new Date() && !task.done) {
                return true;
            } else {
                return false;
            }
        }
    };

    $scope.filters = [{
        name: 'done',
        condition: function(task) {
            return task.done;
        },
        active: ''
    }, {
        name: 'all undone',
        condition: function(task) {
            return !task.done;
        },
        active: "active"
    },
    {
    	name: 'today',
    	condition: $scope.deadlineCondition(new Date().setDate((new Date()).getDate() + 1)),
    	active: false
    }];
    $scope.activeFilter = 1;

    $scope.tasks =  []; //window.MODULE.config.tasks ||

    $scope.addTask = function() {
    	if (!$scope.formItems[0].value){
    		return;
    	}
        var task = {};
        $scope.formItems.forEach(function(item) {
            task[item.name] = item.value;
        });
        task['done'] = false;

        $scope.tasks.push(task);
        for (var i = 0; i < $scope.formItems.length; i++) {
            $scope.formItems[i].value = '';
        }

    };

    $scope.delTask = function(index) {
        $scope.tasks.splice(index, 1);
    };

    $scope.edtTask = function(index) {
        $scope.tasks[index].editRegime = true;
    };

    $scope.saveTask = function(index) {
        $scope.tasks[index].editRegime = false;
    };

    $scope.show = function(index) {
        return $scope.filters[$scope.activeFilter].condition($scope.tasks[index]);
    };

    $scope.setFilter = function(index) {
        $scope.activeFilter = index;
        $scope.filters.forEach(function(filter) {
            filter.active = '';
        });
        $scope.filters[index].active = "active";
    };
   
}])
