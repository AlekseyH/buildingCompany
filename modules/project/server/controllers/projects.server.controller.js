'use strict';

/*
  Module dependencies
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Project = mongoose.model('Project'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));


/*
  Create a Project
 */

exports.create = function (req, res) {

  var project = req.project;
  project.projectName = req.project.projectName;
  project.location = req.project.location;
  project.startDate = req.project.startDate;

  project.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(project);
    }
  });
};

exports.read = function (req, res) {

  var project = req.project ? req.project.toJSON() : {};
  project.isCurrentUserOwner = !!(req.user && req.project.user && req.user.toString() === req.project.user.toString());
  res.json(project);
};

exports.update = function (req, res) {

  var project = req.project;

  project.projectName = req.project.projectName;
  project.location = req.project.location;
  project.startDate = req.project.startDate;

  project.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(project);
    }
  });
};

exports.delete = function (req, res) {
  var project = req.project;

  project.remove(function (err) {

    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(project);
    }
  });
};
