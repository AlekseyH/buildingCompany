/**
 * Created by user on 07-Jul-16.
 */
'use strict';

/*
  Module dependency
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

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
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});


mongoose.model('Project', ProjectSchema);
