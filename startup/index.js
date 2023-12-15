const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const DB = require('./database.js');
const bcrypt = require('bcrypt');
const port = process.argv.length > 2 ? process.argv[2] : 4000;

const authCookieName = 'token';

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.set('trust proxy', true);

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
	if (await DB.getUser(req.body.username)) {
	  res.status(409).send({ msg: 'Existing user' });
	} else {
	  const user = await DB.createUser(req.body.username, req.body.password);
	//   DB.removeCurrUser();
	//   DB.setCurrUser(req.body.username);
  
	  // Set the cookie
	  setAuthCookie(res, user.token);
  
	  res.send({
		id: user._id,
	  });
	}
  });
  
  // GetAuth token for the provided credentials
  apiRouter.post('/auth/login', async (req, res) => {
	const user = await DB.getUser(req.body.username);
	if (user) {
		// DB.removeCurrUser();
		// DB.setCurrUser(req.body.username);
	  if (await bcrypt.compare(req.body.password, user.password)) {
		setAuthCookie(res, user.token);
		res.send({ id: user._id });
		return;
	  }
	}
	res.status(401).send({ msg: 'Unauthorized' });
  });
  
  // DeleteAuth token if stored in cookie
  apiRouter.delete('/auth/logout', (_req, res) => {
	res.clearCookie(authCookieName);
	res.status(204).end();
  });
  
  // GetUser returns information about a user
  apiRouter.get('/user/userName', async (req, res) => {
	const user = await DB.getUser(req.params.username);
	if (user) {
	  const token = req?.cookies.token;
	  res.send({ user: user.username, authenticated: token === user.token });
	  return;
	}
	res.status(404).send({ msg: 'Unknown' });
  });
  
  // secureApiRouter verifies credentials for endpoints
  var secureApiRouter = express.Router();
  apiRouter.use(secureApiRouter);
  
  secureApiRouter.use(async (req, res, next) => {
	authToken = req.cookies[authCookieName];
	const user = await DB.getUserByToken(authToken);
	if (user) {
	  next();
	} else {
	  res.status(401).send({ msg: 'Unauthorized' });
	}
  });

//GET
apiRouter.get('/getCurrUser', async(_req, res) => {
	const user = await DB.getCurrUser();
	res.send(user.username);
});

apiRouter.get('/events', async (_req, res) => {
    const events = await DB.getEvents(_req.username);
	res.send(events);
});

apiRouter.get('/entries', async (_req, res) => {
    const entries = await DB.getEntries(_req.username);
	res.send(entries);
});

apiRouter.get('/moods', async (_req, res) => {
    const moods = await DB.getMoods(_req.username);
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

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
	res.cookie(authCookieName, authToken, {
	  secure: true,
	  httpOnly: true,
	  sameSite: 'strict',
	});
  }

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

