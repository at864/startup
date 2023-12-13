const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);

const db = client.db('startup');
const eventCollection = db.collection('event');
const entryCollection = db.collection('entry');
const moodCollection = db.collection('mood');
const userCollection = db.collection('user');
const currentCollection = db.collection('current');


// Test that you can connect to the database
(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
});

function getCurrUser() {
  const query = {}
  const options = {limit: 1};
  return currentCollection.findOne(query, options);
}

async function setCurrUser(username) {
  const user = {"username" : username};
  await currentCollection.insertOne(user);
}

function removeCurrUser(){
  const query = {};
  if (err) throw err;

  currentCollection.deleteMany(query, function(err, obj){
    if (err) throw err;
  });
}

function getUser(userName) {
  return userCollection.findOne({ username: userName });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(userName, password) {
  console.log("creating user");
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: userName,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  createUserMoods(userName);

  return user;
}

async function createUserMoods(userName) {
  const mood = {
    username: userName,
    'sunMood': 0,
    'monMood': 0,
    'tueMood': 0,
    'wedMood': 0,
    'thuMood': 0,
    'friMood': 0,
    'satMood': 0
  };
  console.log(mood);
  await moodCollection.insertOne(mood);
}


function getEntries(userName) {
  const query = {username: userName};
  const options = {
    limit: 1,
  };
  const cursor = entryCollection.find(query, options);
  const results = cursor;
  delete results.username;
  delete results._id;
  return results;
}


function getEvents(userName) {
  const query = {username: userName};
  const options = {
    limit: 1,
  };
  const cursor = eventCollection.find(query, options);
  const results = cursor;
  delete results.username;
  delete results._id;
  return results;
}


function getMoods(userName) {
  const query = {username: userName};
  const options = {
    limit: 1,
  };
  const cursor = moodCollection.find(query, options);
  const results = cursor;
  delete results.username;
  delete results._id;
  return results;
}


async function setMoods(newMoods, userName) {
  const filter = { username: userName };
  const result = await moodCollection.replaceOne(filter, newMoods);
}

module.exports = {getUser, getUserByToken, createUser, getEvents, getEntries, getMoods, setMoods, getCurrUser, setCurrUser, removeCurrUser};