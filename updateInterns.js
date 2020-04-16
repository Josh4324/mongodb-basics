const {
    MongoClient
} = require("mongodb");
const url = "mongodb://localhost:27017/";

const updateMovie = () => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        const dbo = db.db("JoshDev");
        var myquery = {
            movie: "The Banker"
        }
        var newvalues = {
            $set: {
                movie: "Money Heist",
                year: "2020",
                rating: 10
            }
        };
        dbo.collection("myMovies").updateOne(myquery, newvalues, (err, res) => {
            if (err) throw err;
            console.log("db updated");
            db.close();
        });
        dbo.collection("myMovies").find({}).toArray((err, result) => {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
}

updateMovie();