const express = require("express");
const bodyParser = require("body-parser");

const dbConfig = require('./app/config/mongodb.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Successfully connected to MongoDB');
}).catch((err) => {
    console.log('Failed to connect to MongoDB');
    process.exit();
})


const app = express();
app.use(bodyParser.json());


require('./app/routes/cliente.router')(app);



app.listen(8080, () => {
  console.log("Server iniciado...");
});
