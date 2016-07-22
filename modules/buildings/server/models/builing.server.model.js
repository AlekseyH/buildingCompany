'use strict';

/*
  Module dependencies
 */

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/*
  Building schema
 */

var BuildingSchema = new Schema({

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
  },
  project: {
    type: Schema.ObjectId,
    ref: 'Project'
  }
});

mongoose.model('Building', BuildingSchema);

