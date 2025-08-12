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