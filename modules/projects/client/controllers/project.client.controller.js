(function () {
  'use strict';

  angular
    .module('projects')
    .controller('ProjectController', ProjectController);

  ProjectController.$inject = ['$scope', 'projectResolver'];

  function ProjectController($scope, project) {
    var vm = this;

    vm.error = null;
    vm.save = save;
    vm.form = {};
    vm.project = project;

    function save(isValid) {

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.projectForm');
        return false;
      }

      if (vm.project._id) {
        project.$update(successCallBack, errorCallBack);

      } else {
        project.$save(successCallBack, errorCallBack);
        console.log(vm.project);

      }

      function successCallBack (res) {
        console.log(res);
      }

      function errorCallBack(res) {
        vm.error = res.data + ' ' + res.statusText;
        console.log(res);
      }
    }
  }
  // aleksey1234Q#
}());
