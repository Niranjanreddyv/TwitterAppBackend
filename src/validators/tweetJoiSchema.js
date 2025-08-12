
import Joi from "joi";

export const tweetSchema = Joi.object({
    body: Joi.string().min(1).max(180).required()
});

