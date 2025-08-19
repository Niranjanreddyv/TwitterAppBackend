import { createTweet as createTweetService,
    getTweet as getTweetService,
    getTweetById as getTweetByIdService,
    deleteTweet as deleteTweetService,
    updateTweet as updateTweetService,
} from "../services/tweetService.js"


export const getTweet = async (req,res)=>{

    try {
        const response = await getTweetService();
        console.log(response);
        return res.status(200).json({
            response,
            success : true,
            message : "Tweets fetched successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message : "Interanal server error",
            success : false
        })
        
    }
    
}

export const getTweetById = async (req,res)=>{

    try {
        const response = await getTweetByIdService(req.params.id);
        console.log(response);
        return res.status(200).json({
            response,
            success : true,
            message : "Tweets fetched successfully"
        }) 
    } catch (error) {
        if(error.status){
            return res.status(error.status).json({
                message : error.message,
                success : false
            });
        }
        return res.status(500).json({
            message : "Interanal server error",
            success : false
        })
        
    }
}

export const deleteTweet = async (req, res) =>{
    try {
        const response = await deleteTweetService(req.params.id);
        console.log(response);
        return res.status(200).json({
            response,
            success : true,
            message : "Tweets deleted successfully"
        }) 
    } catch (error) {
        if(error.status){
            return res.status(error.status).json({
                message : error.message,
                success : false
            });
        }
        return res.status(500).json({
            message : "Interanal server error",
            success : false
        })
        
    }
}

export const updateTweet = async (req,res)=>{

    try {
        const response = await updateTweetService(req.params.id, req.body.body);
        console.log(response);
        return res.status(200).json({
            response,
            success : true,
            message : "Tweets updated successfully"
        }) 
    } catch (error) {
        if(error.status){
            return res.status(error.status).json({
                message : error.message,
                success : false
            });
        }
        return res.status(500).json({
            message : "Interanal server error",
            success : false
        })
        
    }

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
