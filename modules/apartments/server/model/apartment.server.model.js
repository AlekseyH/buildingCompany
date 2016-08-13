/**
 * Created by user on 13-Aug-16.
 */
'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


var Apartments = new Schema({

  building: {
    type: Schema.ObjectId,
    ref: 'Building'
  },
  apartments: [Apartment]

});

var Apartment = new Schema({

  projectName: {
    type: String,
    required: 'Apartment must have project name',
    trim: true,
    default: ''
  },
  buildingName: {
    type: String,
    required: 'Apartment must have building name',
    trim: true,
    default: ''
  },
  departmentIndex: {
    type: Number,
    required: 'Apartment must have its number',
    trim: true,
    default: 0
  }
});

mongoose.model('Apartment', Apartment);
mongoose.model('Apartments', Apartments);
