require("dotenv").config();
const express = require("express");
const app = express();
const users = require("./routes/users");
const transactions = require("./routes/transaction");
const auth = require("./routes/auth");
const Eureka = require('eureka-js-client').Eureka;
const cors = require('cors');

app.use(express.json());

app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

const connection = require("./db");


connection();
app.use(express.json());

// routes gestion users
app.use("/api/users", users);
// route gestion auth
app.use("/api/auth", auth);
app.use("/api/transaction", transactions);



//eureka config
const eureka = new Eureka({
    instance: {
        app: 'Compteservices',
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
eureka.start(function(error) {
    console.log(error || 'complete');
});


const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));