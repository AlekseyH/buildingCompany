(function () {
  'use strict';

  angular
    .module('projects')
    .controller('ProjectController', ProjectController);

  ProjectController.$inject = ['$scope', '$state', 'projectResolver', '$window', 'Authentication'];

  function ProjectController($scope, $state, project, $window, Authentication) {
    var vm = this;

    vm.error = null;
    vm.save = save;
    vm.form = {};
    vm.project = project;
    vm.authentication = Authentication;
    vm.remove = remove;

    function remove () {
      if ($window.confirm('Are you sure you want to remove this project')) {
        vm.project.$remove($state.go('projects.list'));
      }
    }

    function save(isValid) {

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.projectForm');
        return false;
      }

      if (vm.project._id) {
        vm.project.$update(successCallBack, errorCallBack);
      } else {
        console.log(vm.project.startDate);
        vm.project.$save(successCallBack, errorCallBack);
      }

      function successCallBack (res) {
        $state.go('projects.view', {
          projectId: res._id
        });
      }

      function errorCallBack(res) {
        vm.error = res.data + ' ' + res.statusText;
      }
    }
  }
  // aleksey1234Q#
}());
