// const low = require('lowdb');
// const FileSync = require('lowdb/adapters/FileSync');

// const adapter = new FileSync('./model/contacts.json');
// const db = low(adapter);

// db.defaults({ contacts: [] }).write();

// module.exports = db;

// const { MongoClient } = require('mongodb');

// require('dotenv').config();

// const uriDb = process.env.URI_DB;

// const db = MongoClient.connect(uriDb, {
//   useUnifiedTopology: true,
//   poolSize: 5,
// });

// module.exports = db;

const mongoose = require('mongoose');
require('dotenv').config();
const uriDb = process.env.URI_DB;

const db = mongoose.connect(uriDb, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose connection to db');
});

mongoose.connection.on('error', err => {
  console.log(`Mongoose connection error: ${err.message}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('Connection for db closed and app termination');
  process.exit(1);
});

module.exports = db;
