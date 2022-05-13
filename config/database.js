const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('connect', function() {
  console.log(`Connected to MonogoDB ${db.name} at ${db.host}: ${db.port}`);
});