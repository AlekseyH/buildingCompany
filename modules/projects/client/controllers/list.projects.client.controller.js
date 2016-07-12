(function () {
  'use strict';

  angular
    .module('projects')
    .controller('ProjectListController', ProjectListController);

  ProjectListController.$inject = ['ProjectServices'];

  function ProjectListController(ProjectServices) {
    var vm = this;
    vm.numberOfPages = 0;
    vm.amount = 0;
    vm.limitedSize = 7;
    vm.current = 0;
    vm.array = [];

    vm.projects = ProjectServices.query(function (data) {
      vm.amount = data.length;
      vm.numberOfPages = Math.ceil(vm.amount / vm.limitedSize) - 1;
      vm.array = data;
    });

    vm.getNext = function (input) {
      vm.current += 1;
      vm.array = vm.projects.slice(input);
    };

    vm.getPrevious = function (input) {
      vm.current -= 1;
      vm.array = vm.projects.slice(input);
    };
  }
}());
