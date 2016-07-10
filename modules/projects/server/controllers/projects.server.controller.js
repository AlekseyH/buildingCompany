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

  var project = new Project(req.body);
  project.user = req.user;

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
  project.isCurrentUserOwner = !!(req.user && project.user && project.user._id.toString() === req.user._id.toString());
  res.json(project);
};

exports.update = function (req, res) {

  var project = req.project;

  project.projectName = req.body.projectName;
  project.location = req.body.location;
  project.startDate = req.body.startDate;

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


exports.list = function (req, res) {
  Project.find().sort('-created').populate('user, displayName').exec(function (err, projects) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(projects);
    }
  });
};


exports.projectById = function (req, res, next, id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Project is not valid '
    });
  }

  Project.findById(id).populate('user', 'displayName').exec(function (err, project) {
    if (err) {
      return next(err);
    } else if (!project) {
      return res.status(400).send({
        message: 'No project with this id was found'
      });
    }
    req.project = project;
    next();
  });
};
