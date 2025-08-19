import { Filter } from "bad-words"
import { createTweet  as createTweetRepository, 
    getTweet as getTweetRepository,
    getTweetById as getTweetByIdRepository,
    deleteTweet as deleteTweetRepository,
    updateTweet as updateTweetRepository,

} from "../repositories/tweetRepository.js";

export const createTweet = async ({body}) => {

    const filter = new Filter();
    // console.log("service layer");

    if(filter.isProfane(body)){
        // console.log(body);
        // console.log(filter.clean(body));
        throw {
            message : "tweet contains blocked words",
            status : 400
        };
    }
   // console.log("tweet repo called");
    const tweet = await createTweetRepository({body});
   // console.log("tweet get it back");
    return tweet;

}

export const getTweet = async () =>{
    const tweet = await getTweetRepository();
    return tweet;
}

export const getTweetById = async (id) => {
    const tweet = await getTweetByIdRepository(id);
    if(!tweet){
        throw{
            message : "Invalid TweetId",
            status: 404
        };
    }
    return tweet;
}

export const deleteTweet = async (id) => {
    const response = await deleteTweetRepository(id);
    if(!response){
        throw{
            message : "Invalid TweetId",
            status: 404
        };
    }
    return response;
}

export const updateTweet = async (id, body) => {
    const response = await updateTweetRepository(id, body);
    if(!response){
        throw{
            message : "Invalid TweetId",
            status: 404
        };
    }
    return response;
}