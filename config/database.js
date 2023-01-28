const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongooseFlights', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  family: 4 // <--- This is the new line
});

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})