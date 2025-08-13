import Tweet from "../schema/tweets.js";

export const createTweet = async ({body}) => {
    try{
        const tweet = await Tweet.create({body});
        return tweet;
    }
    catch(error){
        console.log(error);
        throw error

    }
}

export const getTweet = async () => {
    try {
        const tweet = await Tweet.find();
        return tweet;
    } catch (error) {
        throw error;
    }
}

export const getTweetById = async (tweetId) => {
    try {
        const tweet = Tweet.findById(tweetId);
        return tweet;
    } catch (error) {
        throw error;
        
    }
}