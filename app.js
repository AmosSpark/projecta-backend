const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// ROUTES
const projectsRoute = require("./routes/projects");
const userRoute = require("./routes/users");

app.use("/users", userRoute);
app.use("/projects", projectsRoute);
app.get("/", (req, res) => {
  res.send("we are on the home route");
});
// Connecting to DB
// mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true },
// 	() => {
// 		console.log('Connected to DB')
// 		/*
// 			The below code checks for the connection state to your DB
// 		    0: disconnected
// 		    1: connected
// 		    2: connecting
// 		    3: disconnecting
// 			*/
// 		console.log(mongoose.connection.readyState);
// 	}
// );

// CONNECTION TO DB LOCAL

mongoose
  .connect("mongodb://localhost/projecta", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log(
      `Status: ${mongoose.connection.readyState} [Connected to mongodb...]`
    )
  )
  .catch((error) =>
    console.error(
      `Status: ${mongoose.connection.readyState} [Couldn't connect to mongodb.]`,
      error.message
    )
  );

app.listen(5000);
