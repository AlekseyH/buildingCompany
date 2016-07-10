/**
 * Created by user on 08-Jul-16.
 */
'use strict';

/*
  Module dependency
 */

var acl = require('acl');

acl = new acl(new acl.memoryBackend());

/*
  Invoke project permissions
 */

exports.invokeRolesPolicies = function () {
  acl.allow([{
    roles: ['admin'],
    allows: [{
      resources: 'api/projects/',
      permissions: ['*']
    }, {
      resources: 'api/projects/:projectId',
      permissions: ['*']
    }] }, {
      roles: ['user'],
      allows: [{
        resources: 'api/projects',
        permissions: ['get', 'post']
      }, {
        resources: 'api/projects/:projectId',
        permissions: ['get', 'post']
      }] }, {
        roles: ['guest'],
        allows: [{
          resources: 'api/projects',
          permissions: ['get']
        }]
      }]);
};


exports.isAllowed = function (req, res, next) {

  var roles = (req.user) ? req.user.roles : ['guest'];

  if (req.project && req.user && req.project.user && req.project.user._id === req.user._id) {
    return next();
  }

  acl.areAnyRolesAllowed(roles, req.route.path, req.method.toLowerCase(), function (err, isAllowed) {

    if (err) {
      return res.status(500).send('Unexpected authorization error');
    } else {
      if (isAllowed) {
        return next();
      } else {
        return res.status(403).json({
          message: 'User is not authorized'
        });
      }
    }
  });
};
