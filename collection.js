const {
    MongoClient
} = require("mongodb");
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("JoshDev");
    dbo.createCollection("interns", (err, res) => {
        if (err) throw err;
        console.log("interns collection created");
        db.close();
    });
});