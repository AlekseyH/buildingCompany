(function () {
  'use strict';

  angular
    .module('buildings')
    .controller('BuildingsController', BuildingsController);

  BuildingsController.$inject = ['$stateParams'];

  function BuildingsController ($stateParams) {
    var vm = this;

  }
}());
