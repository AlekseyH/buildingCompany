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
    vm.searchCriteria = ''; // for future searching

    /*
      This function exist because $resource is asynch response just that way we can get result of this response
     */

    vm.projects = ProjectServices.query(function (data) {
      vm.amount = data.length;
      vm.numberOfPages = Math.ceil(vm.amount / vm.limitedSize) - 1;
      vm.array = data;
    });

    /*
      Should implement soon searching by name
     */
    vm.search = function () {
      // console.log(vm.searchCriteria);
    };

    /*
      Both functions are responsible for pagination
     */
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
