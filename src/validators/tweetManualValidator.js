import mongoose from "mongoose";

export const createManualTweetValidator = (req, res, next)=>{
    if(!req.body.tweet){
        return res.status(400).json({
            error : "tweet must be required"
        });
    }
    if(req.body.tweet.length > 200){
        return res.status(400).json({
            error : "tweet must be less than 200 characters length"
        });
    }
    next();
}

export const getTweetByIdManualValidator = (req, res, next) =>{
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
    if(!isValidId){
        return res.status(400).json({
            message : "invalid tweet id",
            success : false
        });
    }
    next();
}