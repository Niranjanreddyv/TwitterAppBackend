import { Filter } from "bad-words"
import { createTweet  as createTweetRepository} from "../repositories/tweetRepository.js";

export const createTweet = async ({body}) => {

    const filter = new Filter();
    console.log("service layer");

    if(filter.isProfane(body)){
        console.log(body);
        console.log(filter.clean(body));
        throw {
            message : "tweet contains blocked words",
            status : 400
        };
    }
    console.log("tweet repo called");
    const tweet = await createTweetRepository({body});
    console.log("tweet get it back");
    return tweet;

}