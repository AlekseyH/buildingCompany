(function () {
  'use strict';

  angular
    .module('projects')
    .controller('ProjectListController', ProjectListController);

  ProjectListController.$inject = ['ProjectServices'];

  function ProjectListController(ProjectServices) {
    var vm = this;
    vm.numberOfPages = 10;
    vm.amout = 0;
    vm.projects = ProjectServices.query(function (data) {
      vm.amout = data.length;
    });
  }
}());
