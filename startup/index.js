const express = require('express');
const app = express();
const DB = require('./database.js');

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

//GET
apiRouter.get('/events', async (_req, res) => {
    const events = await DB.getEvents();
	res.send(events);
});

apiRouter.get('/entries', async (_req, res) => {
    const entries = await DB.getEntries();
	res.send(entries);
});

apiRouter.get('/moods', async (_req, res) => {
    const moods = await DB.getMoods();
	res.send(moods);
});

//POST
// apiRouter.post('/event', (req, res) => {
// 	events = addEvent(req.body, events);
// 	res.send(events);
// });

// apiRouter.post('/entry', (req, res) => {
// 	entries = addEntry(req.body, entries);
// 	res.send(entries);
// });

apiRouter.post('/mood', (req, res) => {
    DB.setMoods(req.body);
});

app.use((_req, res) => {
	res.sendFile('index.html', {root: 'public'});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

