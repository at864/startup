const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

//GET
apiRouter.get('/events', (_req, res) => {
	res.send(events);
});

apiRouter.get('/entries', (_req, res) => {
	res.send(entries);
});

apiRouter.get('/moods', (_req, res) => {
	res.send(moods);
});

//POST
apiRouter.post('/event', (req, res) => {
	events = addEvent(req.body, events);
	res.send(events);
});

apiRouter.post('/entry', (req, res) => {
	entries = addEntry(req.body, entries);
	res.send(entries);
});

apiRouter.post('/mood', (req, res) => {
	moods = addMood(req.body, moods);
	res.send(moods);
});

app.use((_req, res) => {
	res.sendFile('index.html', {root: 'public'});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
