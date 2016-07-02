(function () {
  'use strict';

  angular
    .module('project.routes')
    .config(routeConfig);


  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('projects', {
        abstract: 'true',
        url: '/projects',
        template: '<ui-view/>'
      })
      .state('projects.list', {
        url: '',
        templateUrl: 'modules/project/client/views/list-projects.client.view.html',
        controller: 'ProjectListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Project List'
        }
      })
      .state('projects.create', {
        url: '/create',
        templateUrl: 'modules/project/client/views/form-project.client.view.html',
        controller: 'ProjectController',
        controllerAs: 'vm',
        resolve: {
          projectResolver: newProject
        },
        data: {
          pageTitle: 'Create Project'
        }
      });
  }

  newProject.$inject = ['ProjectServices'];

  function newProject(ProjectServices) {
    return new ProjectServices();
  }

}());
