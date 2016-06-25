(function (app) {
  'use strict';

  app.registerModule('projects', ['core']);
  app.registerModule('project.routers', ['ui.router', 'core.routes']);

}(ApplicationConfiguration));
