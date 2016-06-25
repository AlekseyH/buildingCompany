(function () {
  'use strict';

  angular
    .module('project.routers')
    .config(routeConfig);


  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('projects', {
        abstract: 'true',
        url: '/projects',
        template: '<ui-view/>'
      })
      .state('project.list', {
        url: '',
        templateUrl: 'modules/projects/client/views/test.html'
      });
  }

});
