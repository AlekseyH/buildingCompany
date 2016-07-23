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

    function save(isValid) {

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.buildingForm');
        return false;
      }

      if (vm.project._id) {
        console.log(vm.project);
        console.log(vm.building);
      } else {
        // throw error , can't exist building without project
      }
    }


  }
}());
