(function () {
  'use strict';

  angular
    .module('projects.routes')
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
        templateUrl: 'modules/projects/client/views/list-projects.client.view.html',
        controller: 'ProjectListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Project List'
        }
      })
      .state('projects.create', {
        url: '/create',
        templateUrl: 'modules/projects/client/views/form-project.client.view.html',
        controller: 'ProjectController',
        controllerAs: 'vm',
        resolve: {
          projectResolver: newProject
        },
        data: {
          pageTitle: 'Create Project'
        }
      })
      .state('projects.view', {
        url: '/:projectId',
        templateUrl: 'modules/projects/client/views/view-project.client.view.html',
        controller: 'ProjectController',
        controllerAs: 'vm',
        resolve: {
          projectResolver: getProject
        }
      })
      .state('projects.edit', {
        url: '/:projectId/edit',
        templateUrl: 'modules/projects/client/views/form-project.client.view.html',
        controller: 'ProjectController',
        controllerAs: 'vm',
        resolve: {
          projectResolver: getProject
        }
      });
  }

  getProject.$inject = ['$stateParams', 'ProjectServices'];

  function getProject ($stateParams, ProjectServices) {
    return ProjectServices.get({
      projectId: $stateParams.projectId
    }).$promise;
  }

  newProject.$inject = ['ProjectServices'];

  function newProject(ProjectServices) {
    return new ProjectServices();
  }

}());
