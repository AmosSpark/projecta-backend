const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
app.use(bodyParser.json())
// ROUTES
const projectsRoute = require('./routes/projects');
app.use('/projects', projectsRoute);
app.get('/', (req, res) => {
	res.send('we are on the home route');
});
// Connecting to DB
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true },
	() => {
		console.log('Connected to DB')
		/*
			The below code checks for the connection state to your DB
		    0: disconnected
		    1: connected
		    2: connecting
		    3: disconnecting
			*/
		console.log(mongoose.connection.readyState);
	}
);
app.listen(3000);
