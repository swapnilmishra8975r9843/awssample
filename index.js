const express = require("express");
const app = express();
const { connect } = require("./db/connect");
require("dotenv").config();
const router = require("./router/routes");

app.use(router);

const Start = (url) => {
  try {
    connect(url);
    
    app.listen("3000", () => {
      console.log("connect");
    });
  } catch (err) {
    console.log(err);
  }
};

Start(process.env.URL);
