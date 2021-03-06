const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

const url = "mongodb://Demouser:1password@ds137882.mlab.com:37882/heroku_f7s66bjv";

// Connect to the Mongo DB 
mongoose.connect(
  process.env.MONGODB_URI || url, { useNewUrlParser: true }
);

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
