export const getTweet = (req,res)=>{
    return res.json({
        message : "common tweet"
    })
}

export const getTweetById = (req,res)=>{
    return res.json({
        message : "this is tweet_id route",
        id : req.params.id
    })
}

export const createTweet = (req, res)=>{
    console.log("tweet controller called", req.body);
    return res.json({
        message : "tweet created successfuly",
        body : req.body
    })

}