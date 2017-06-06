const monk = require('monk');

const HOST = 'localhost:27017';
const DB = process.env.ENVIORNMENT || 'meteor';
const defaultDB = `${HOST}/${DB}`;

const dbConnect = process.env.MONGODB_URI || defaultDB;
const db = monk(dbConnect);

db.then(() => {
  console.log('Connected to mongod server:');
  console.log(dbConnect);
});

module.exports = db;
