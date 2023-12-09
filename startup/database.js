const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const eventCollection = db.collection('event');
const entryCollection = db.collection('entry');
const moodCollection = db.collection('mood');


// Test that you can connect to the database
(async function testConnection() {
    await client.connect();
    await DB.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });


function getEntries() {
  const query = {};
  const options = {
    limit: 1,
  };
  const cursor = entryCollection.find(query, options);
  const results = cursor.delete("_id");
  return results;
}


function getEvents() {
  const query = {};
  const options = {
    limit: 1,
  };
  const cursor = eventCollection.find(query, options);
  const results = cursor.delete("_id");
  return results;
}


function getMoods() {
  const query = {};
  const options = {
    limit: 1,
  };
  const cursor = moodCollection.find(query, options);
  const results = cursor.delete("_id");
  return results;
}


async function setMoods(newMoods) {
  const filter = { _id: 0x6573fdbecf988dc38935bf3b };
  const result = await moodCollection.replaceOne(filter, newMoods);
}

module.exports = {getEvents, getEntries, getMoods, setMoods};