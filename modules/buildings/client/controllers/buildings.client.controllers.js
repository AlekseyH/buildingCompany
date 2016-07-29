(function () {
  'use strict';

  angular
    .module('buildings')
    .controller('BuildingsController', BuildingsController);

  BuildingsController.$inject = ['$scope', '$state', 'projectResolve', '$window', 'Authentication'];

  function BuildingsController ($scope, $state, project, $window, Authentication) {

    var vm = this;

  // initialization objects
    vm.project = project;
    vm.building = {};

  // functionality
    vm.save = save;
    vm.remove = remove;
    vm.edit = edit;

  // initialization variables
    vm.parentName = $state.params.projectName;
    vm.index = $state.params.index ? $state.params.index : 0;

  // implementation
    function save(isValid) {

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.buildingForm');
        return false;
      }

      if (vm.project._id) {

        vm.project.addBuilding = vm.building;
        vm.project.$update(successCallBack, errorCallBack);
      } else {
        // throw error , can't exist building without project

      }
    }

    function successCallBack(res) {
      $state.go('projects.view', {
        projectId: res._id
      });
    }

    function errorCallBack(res) {
      vm.error = res.data + ' ' + res.statusText;
    }

    function remove($window) {

    }

    function edit() {

    }

  }
}());
