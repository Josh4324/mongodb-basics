const {
    MongoClient
} = require("mongodb");
const url = "mongodb://localhost:27017/";

const Movies = [{
    movie: "The Banker",
    year: "2020",
    rating: 8
}, {
    movie: "Bad Boys",
    year: "2020",
    rating: 7
}, {
    movie: "The Hunt",
    year: "2020",
    rating: 7
}, {
    movie: "Bloodshot",
    year: "2020",
    rating: 7.5
}, {
    movie: "First Cow",
    year: "2020",
    rating: 6.5
}]

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("JoshDev");
    dbo.createCollection("myMovies", (err, res) => {
        if (err) throw err;
        console.log("interns collection created");
        db.close();
    });

    dbo.collection("myMovies").insertMany(Movies, (err, res) => {
        if (err) throw err;
        console.log("result", res);
        db.close();
    });


});