const database = require("mongoose");

const is_heroku = process.env.IS_HEROKU || false;

const databaseName = "lab_example"

const herokuURI = "mongodb+srv://johnnykung:tzuning615@clusterokewebsite.a4z3c.gcp.mongodb.net/lab_example?retryWrites=true&w=majority"

const localURI = "mongodb://localhost/"+databaseName+"?authSource=admin&retryWrites=true;"

if (is_heroku) {
	database.connect(herokuURI, {useNewUrlParser: true, useUnifiedTopology: true});
}

else {
	database.connect(localURI, {useNewUrlParser: true, useUnifiedTopology: true});
}