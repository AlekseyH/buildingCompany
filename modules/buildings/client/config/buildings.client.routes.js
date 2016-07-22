(function () {
  'use strict';

  angular
    .module('buildings.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];
  function routeConfig ($stateProvider) {

    $stateProvider
      .state('buildings', {
        abstract: true,
        url: '/project/:projectId/building',
        template: '<ui-view/>'
      })
      .state('buildings.create', {
        url: '/create',
        templateUrl: 'modules/buildings/client/views/form-building.client.view.html',
        controller: 'BuildingsController',
        controllerAs: 'vm',
        resolve: {
          buildingResolve: newBuilding
        },
        params: {
          projectName: ''
        }
      })
      .state('buildings.view', {
        url: '/:buildingId',
        templateUrl: '',
        controller: '',
        controllerAs: ''
      })
      .state('buildings.edit', {
        url: '/:buildingId/edit',
        templateUrl: '',
        controller: '',
        controllerAs: ''
      });
  }

  newBuilding.$inject = ['BuildingServices'];

  function newBuilding (BuildingServices) {
    return new BuildingServices();
  }
}());
