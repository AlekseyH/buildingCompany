(function () {
  'use strict';

  angular
    .module('projects')
    .controller('ProjectController', ProjectController);

  ProjectController.$inject = ['$scope', 'projectResolver'];

  function ProjectController($scope, project) {
    var vm = this;

    vm.save = save;
    vm.form = {};
    vm.project = project;

    function save(isValid) {

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.projectForm');
        return false;
      }
    }
  }
  // aleksey1234Q#
}());
