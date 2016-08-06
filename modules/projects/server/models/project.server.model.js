/**
 * Created by user on 07-Jul-16.
 */
'use strict';

/*
  Module dependency
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Building = new Schema({

  buildingName: {
    type: String,
    required: 'Name should be unique',
    trim: true,
    default: ''
  },
  address: {
    type: String,
    required: 'Address mandatory field',
    trim: true
  },
  amountOfApartments: {
    type: Number,
    required: 'Building has to have it least one apartment',
    trim: true,
    default: 1
  }
});
/*
  Schema of Project Object
 */
var ProjectSchema = new Schema({

  projectName: {
    type: String,
    default: '',
    trim: true,
    required: 'Project name is mandatory field'
  },
  location: {
    type: String,
    trim: true,
    required: 'Location of project is mandatory field'
  },
  startDate: {
    type: Date
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  buildings: [Building]
});

mongoose.model('Building', Building);
mongoose.model('Project', ProjectSchema);
