import mongoose from "mongoose";

// how our db looks we can deainfe here 
const tweetSchema = new  mongoose.Schema({
    body : {
        type : String,
        required : true,
        trim : true,
        maxLength : 280
    }
},{timestamps : true});

const Tweet = mongoose.model("Tweet", tweetSchema);

export default Tweet; 