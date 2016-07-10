(function () {
  'use strict';

  angular
    .module('projects.services')
    .factory('ProjectServices', ProjectServices);

  ProjectServices.$inject = ['$resource'];

  function ProjectServices($resource) {
    return $resource('api/projects/:projectId', {
      projectId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
}());
