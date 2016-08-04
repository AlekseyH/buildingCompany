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
    vm.project.isNewBuilding = false;
    vm.project.removeBuilding = false;
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
        vm.project.isNewBuilding = true;
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

    function successCallBackUpdateBuilding(res) {
      $state.go('buildings.view', {
        projectId: vm.project._id,
        buildingId: vm.project.buildings[vm.index]._id,
        index: vm.index
      });
    }
    function errorCallBack(res) {
      vm.error = res.data + ' ' + res.statusText;
    }

    function remove(index) {

      if ($window.confirm('Are you sure you want to remove building ')) {

        vm.project.removeBuilding = true;
        vm.project.index = index;
        vm.project.$update(successCallBack, errorCallBack);

        $state.go('projects.view', {
          projectId: vm.project._id
        });
      }
    }

    function edit(isValid) {
      vm.project.$update(successCallBackUpdateBuilding, errorCallBack);
    }

  }
}());
