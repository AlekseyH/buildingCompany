(function (app) {
  'use strict';

  app.registerModule('buildings', ['core']);
  app.registerModule('buildings.services');
  app.registerModule('buildings.routes', ['ui.router', 'core.routes', 'buildings.services']);

}(ApplicationConfiguration));
