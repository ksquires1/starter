const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);
// Define middleware functions
const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};
// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};
// Using the middleware functions
app.use(cors);
app.use(express.json());
app.use(logging);
//configuring Express instance
app.get("/status", (request, response) => {
  response.send(JSON.stringify({ message: "Service healthy" }));
});
app
  .route("/")
  .get((request, response) => {
    response.send(
      JSON.stringify({ message: "No GET routes available on root URI" }),
      null,
      404
    );
  })
  .post((request, response) => {
    response.send(
      JSON.stringify({ message: "No GET routes available on root URI" }),
      null,
      404
    );
  });
//Executing the Express (This must be last)
const port = process.env.PORT || 4040;
app.listen(port, () => console.log(`Listening on port ${port}`));
