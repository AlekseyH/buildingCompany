(function () {
  'use strict';

  angular
    .module('projects')
    .controller('ProjectController', ProjectController);

  ProjectController.$inject = ['projectResolver'];

  function ProjectController(project) {
    var vm = this;

    vm.save = save;
    vm.form = {};
    vm.project = project;

    function save(isValid) {
      console.log('result is ' + isValid);
      console.log('result is ' + vm.project);
    }
  }
}());
