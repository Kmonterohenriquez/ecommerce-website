require('dotenv').config();
const express = require('express'),
	massive = require('massive'),
	session = require('express-session'),
	{ SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
	authCtrl = require('./controllers/authControllers'),
	// reviewCtrl = require('./controllers/reviewController'),
	app = express();

app.use(express.json());

app.use(
	session({
		resave: false,
		saveUninitialized: true,
		secret: SESSION_SECRET,
		cookie: { maxAge: 1000 * 60 * 60 * 24 }
	})
);

massive(CONNECTION_STRING).then(db => {
	app.set('db', db);
	console.log('db connected');
});

//auth endpoints


const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
