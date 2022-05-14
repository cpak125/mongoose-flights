const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['DFW', 'DEN',
      'LAX', 'SAN', 'ATL', 'JFK',
      'PHX', 'MIA', 'ORD', 'LAS'
    ]
  },
  arrival: Date
}, {
  timestamps: true
});

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest',
      'United', 'Delta', 'Alaska']
  },
  airport: {
    type: String,
    default: 'ATL',
    enum: ['DFW', 'DEN',
      'LAX', 'SAN', 'ATL', 'JFK',
      'PHX', 'MIA', 'ORD', 'LAS'
    ]
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: function() {
      let futureDate = new Date();
      return futureDate.setFullYear(futureDate.getFullYear() + 1);
    }
  },
  destinations: [destinationSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);