const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	user_name:{
		type:String,
		require:true
	},
	password:{
		type:String,
		require:true
	},
	email:{
		type:String,
		require:true
	},
	token:{
		type:String
	},
 },
 {
	timestamps:true
 }
);

const userModel = mongoose.model('my_user',userSchema);
module.exports = userModel;