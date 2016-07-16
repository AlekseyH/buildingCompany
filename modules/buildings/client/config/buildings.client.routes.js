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
        url: '/buildings',
        template: '<ui-view/>'
      })
      .state('buildings.create', {
        url: '/create',
        templateUrl: '',
        controller: 'BuildingsController',
        controllerAs: 'vm'
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
}());
