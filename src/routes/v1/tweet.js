import express from 'express'
import { createTweet, getTweet, getTweetById } from '../../controllers/tweetController.js';
// import { createManualTweetValidator } from '../../validators/tweetManualValidator.js';
import  {validate}  from '../../validators/JoiValidator.js';
import  {tweetSchema}  from '../../validators/tweetJoiSchema.js';

const router = express.Router();

router.get('/', getTweet);

router.get('/:id', getTweetById);

router.post('/', validate(tweetSchema) , createTweet);


export default router;