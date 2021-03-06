(function () {
  'use strict';

  angular
    .module('projects')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {

    menuService.addMenuItem('topbar', {
      title: 'Projects',
      state: 'projects',
      type: 'dropdown',
      roles: ['*']
    });
    menuService.addSubMenuItem('topbar', 'projects', {
      title: 'Projects list',
      state: 'projects.list'
    });

    menuService.addSubMenuItem('topbar', 'projects', {
      title: 'Create new project',
      state: 'projects.create'
    });
  }
}());
