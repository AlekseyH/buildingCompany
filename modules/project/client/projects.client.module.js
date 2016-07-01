(function (app) {
  'use strict';

  app.registerModule('projects', ['core']);
  app.registerModule('project.services');
  app.registerModule('project.routes', ['ui.router', 'core.routes']);

}(ApplicationConfiguration));
