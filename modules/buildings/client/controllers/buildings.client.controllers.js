(function () {
  'use strict';

  angular
    .module('buildings')
    .controller('BuildingsController', BuildingsController);

  BuildingsController.$inject = ['$scope', '$state', 'projectResolve', '$window', 'Authentication'];

  function BuildingsController ($scope, $state, project, $window, Authentication) {

    var vm = this;
    vm.project = project;
    vm.building = {};
    vm.parentName = $state.params.projectName;
    vm.save = save;
    vm.remove = remove;

    function save(isValid) {

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.buildingForm');
        return false;
      }

      if (vm.project._id) {
        // vm.project.buildings.push(vm.building);
        vm.project.addBuilding = vm.building;
        vm.project.$update(successCallBack, errorCallBack);
      } else {
        // throw error , can't exist building without project

      }
    }

    function successCallBack(res) {
      console.log(res);
    }

    function errorCallBack(res) {
      console.log(res);
    }
    function remove($window) {

    }


  }
}());
