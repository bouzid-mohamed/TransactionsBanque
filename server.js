
const express = require('express');

const Eureka = require('eureka-js-client').Eureka;
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const bodyParser = require('body-parser');
var dabController = require('./controller/dabController');
const comptesRouter = require('./routes/comptesRouter');

const uri = process.env.DATABASE_URL ; 
// mongoose config 
mongoose.connect( uri, 
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Error...", err);
    process.exit();
  });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))





app.get('/', (req, res) => {
    res.json({"message": "Server is running :D"});
});

let PORT = 8080
//eureka config
const eureka = new Eureka({
    instance: {
      app: 'Dabservice',
      hostName: 'localhost',
      ipAddr: '127.0.0.1',
      statusPageUrl: 'http://localhost:5000',
      port: {
        '$': 5000,
        '@enabled': 'true',
      },
      vipAddress: 'localhost',
      dataCenterInfo: {
        '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
        name: 'MyOwn',
      }
    },
    eureka: {
      host: 'localhost',
      port: 8761,
      servicePath: '/eureka/apps/'
    }
  });
  eureka.logger.level('debug');
  eureka.start(function(error){
    console.log(error || 'complete');
  });
  
//routes config
app.use('/api/dab', comptesRouter);



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});



