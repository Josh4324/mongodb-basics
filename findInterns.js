const {
    MongoClient
} = require("mongodb");
const url = "mongodb://localhost:27017/";

const getFirstDocument = () => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        const dbo = db.db("JoshDev");
        dbo.collection("myMovies").findOne({}, (err, result) => {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    })
};

const moviesWith7Rating = () => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        const dbo = db.db("JoshDev");
        const query = {
            rating: 7
        };
        dbo.collection("myMovies").find(query).toArray((err, result) => {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    })
};

const allMovietitles = () => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        const dbo = db.db("JoshDev");
        dbo.collection("myMovies").find({}, {
            projection: {
                _id: 0,
                movie: 1
            }
        }).toArray((err, result) => {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    })
};

//getFirstDocument();
//moviesWith7Rating();
allMovietitles();