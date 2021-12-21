const mongoose = require("mongoose");

module.exports = async () => {
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
};

