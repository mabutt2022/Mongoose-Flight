const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
  airport: {type: String, enum:["ATL", "DFW", "DEN", "LAX", "SAN"]},
  arrival: {type: Date, 
    default: function(){
      var date = new Date();
      return date;
    }
}},
{
  timestamps: true,
}
);

const flightSchema = new Schema({
  airline: { type: String, enum: ["American", "Delta", "Southwest", "United"] },
  airport: { type: String, enum: ["ATL", "DFW", "DEN", "LAX", "SAN"] },
  flightNo: { type: Number, required: true, minimum: 10, maximum: 9999 },
  departs: {
    type: Date,
    default: function () {
      date = new Date()
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear() + 1;
      let fullDate = new Date(month+'-'+day+'-'+year)
      return fullDate;
    },
  },
  destinations: [destinationSchema],
  ticket: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Ticket'
    }
  ]
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("Flight", flightSchema);
