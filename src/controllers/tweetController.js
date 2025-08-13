import { createTweet as createTweetService} from "../services/tweetService.js"


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

export const createTweet = async (req, res)=>{
    console.log(req.body)
    try{
        const response = await createTweetService({
            body : req.body.body
        })
        return res.status(201).json({
            message : "tweet created successfully",
            data : response,
            success : true
        })
    } catch (error) {

        // console.log(error);
        if(error.status){
            return res.status(error.status).json({
                message : error.message,
                success : false
            });
        }

        return res.status(500).json({
            message : "Internal Server Error",
            success : false
        })
        
    }

}