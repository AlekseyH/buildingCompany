'use strict';

/*
  Module dependencies
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Project = mongoose.model('Project'),
  Building = mongoose.model('Building'),
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
  var removeBuildingId;
  /*
    Use for add new building object to array
  */

  if (req.body.isNewBuilding) {

    var building = new Building();
    building.buildingName = req.body.addBuilding.buildingName;
    building.address = req.body.addBuilding.address;
    building.amountOfApartments = req.body.addBuilding.amount;
    building.project = project._id;

    project.buildings.push(building);
  }

  /*
    Use for remove building object inside project array
   */

  if (req.body.removeBuilding) {
    var a = req.body.index;
    removeBuildingId = project.buildings[a]._id;
    project.buildings.splice(a, 1);
  }

  /*
    Use for update existing building inside project array
   */

  if (req.body.isUpdateBuilding) {
    var i = req.body.index;
    var buildin = project.buildings[i];

    buildin.buildingName = req.body.buildings[i].buildingName;
    buildin.address = req.body.buildings[i].address;
    buildin.amountOfApartments = req.body.buildings[i].amountOfApartments;
  }

  project.save(function (err, result) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {

      // Handling creation or recreation apartments array
      if (req.body.isNewBuilding) {
        var newBuilding = project.buildings.pop();
        console.log(newBuilding);
        createOrUpdateApartments(newBuilding._id, newBuilding.amountOfApartments);
      }

      if (req.body.isUpdateBuilding) {
        var amountOfApartments = project.buildings[req.body.index].amountOfApartments;
        createOrUpdateApartments(project.buildings[req.body.index]._id, amountOfApartments);
      }

      if (req.body.removeBuilding) {
        removeApartments(removeBuildingId);
      }
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

function createOrUpdateApartments(buildingId, amount) {
  console.log('BuildingId :' + buildingId);
  console.log('Amount : ' + amount);
}

function removeApartments(buildingId) {
  console.log('BuildingId :' + buildingId);
}

exports.list = function (req, res) {
  Project.find().sort('created').populate('user, displayName').exec(function (err, projects) {
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
