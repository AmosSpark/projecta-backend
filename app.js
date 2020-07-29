const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// ROUTES
const projectsRoute = require('./routes/projects');

app.use('/projects', projectsRoute);

app.get('/', (req, res) => {
    res.send('we are on the home route');
});

// Connecting to DB
mongoose.connect( process.env.DB_CONNECTION, { useNewUrlParser: true },
    () => console.log('Connected to DB')
);

app.listen(3000);
