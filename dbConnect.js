const mongoose = require('mongoose');
const DB= "mongodb+srv://mk_2line:Mk_1205@cluster0.xho4qsp.mongodb.net/employee_db?retryWrites=true&w=majority";
const dbConnect = () => {
	const connectionParams = { useNewUrlParser: true };
    mongoose.set('strictQuery', false);
	mongoose.connect(DB, connectionParams);

	mongoose.connection.on("connected", () => {
		console.log("Connected to database sucessfully");
	});

	mongoose.connection.on("error", (err) => {
		console.log("Error while connecting to database :" + err);
	});

	mongoose.connection.on("disconnected", () => {
		console.log("Mongodb connection disconnected");
	});
};

module.exports = dbConnect;