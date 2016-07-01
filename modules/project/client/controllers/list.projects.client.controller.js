(function () {
  'use strict';

  angular
    .module('projects')
    .controller('ProjectListController', ProjectListController);

  ProjectListController.$inject = ['ProjectServices'];

  function ProjectListController(ProjectServices) {
    var vm = this;

    vm.projects = ProjectServices.query();
  }
}());
