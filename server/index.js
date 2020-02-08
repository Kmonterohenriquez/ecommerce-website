require('dotenv').config();
const express = require('express'),
	// massive = require('massive'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	{ SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
	authCtrl = require('./controllers/authControllers'),
	// reviewCtrl = require('./controllers/reviewController'),
	itemCtrl = require('./controllers/itemControllers');
app = express();

//Bodyparser Middleware 
app.use(bodyParser.json());


// app.use(express.json());

// ---------- Express (Static Files) --------------- //
// http://localhost:4000/cssFiles/testStyle.css
app.use('/cssFiles', express.static(__dirname + '/competencies'));
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

// AUTH ENDPOINTS
// app.post('/auth/login', authCtrl.login);
// app.post('/auth/register', authCtrl.register);
// app.post('/auth/logout', authCtrl.logout);
// app.get('/auth/userData', authCtrl.userData);
// // axios.get(`/api/items/name=${name}&description=${description}`)

// app.post('api/items', itemCtrl.addItem)
// app.put('/api/items', itemCtrl.updateItem);
// app.delete('/api/items/:item_id', itemCtrl.deleteItem);
// app.get('/api/items/:item_id', itemCtrl.getItem); //GET ONE ITEM
// app.get('/api/items', itemCtrl.getAllItem); // GET ALL ITEM

const port = SERVER_PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));
