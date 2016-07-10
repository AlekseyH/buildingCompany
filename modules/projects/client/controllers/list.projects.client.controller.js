(function () {
  'use strict';

  angular
    .module('projects')
    .controller('ProjectListController', ProjectListController);

  ProjectListController.$inject = ['ProjectServices'];

  function ProjectListController(ProjectServices) {
    var vm = this;

    vm.projects = {
      projects: [
        {
          title: 'Project1',
          location: 'Petah-Tiqwa',
          amountOfBuildings: 3,
          amountOfApartments: 37
        }, {
          title: 'Project2',
          location: 'Tel-Aviv',
          amountOfBuildings: 1,
          amountOfApartments: 10
        }, {

          title: 'Project3',
          location: 'Bat-Yam',
          amountOfBuildings: 2,
          amountOfApartments: 15
        }
      ]
    }; // ProjectServices.query();
  }
}());
