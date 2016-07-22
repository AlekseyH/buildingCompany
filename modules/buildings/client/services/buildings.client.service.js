(function () {
  'use strict';

  angular
    .module('buildings.services')
    .factory('BuildingServices', BuildingServices);

  BuildingServices.$inject = ['$resource'];

  function BuildingServices ($resource) {
    return $resource('api/buildings/:buildingId', {
      buildingId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
}());
