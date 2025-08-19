import express from 'express'
import { createTweet, getTweet, getTweetById } from '../../controllers/tweetController.js';
// import { createManualTweetValidator } from '../../validators/tweetManualValidator.js';
import  {validate}  from '../../validators/JoiValidator.js';
import  {tweetSchema}  from '../../validators/tweetJoiSchema.js';
import { getTweetByIdManualValidator } from '../../validators/tweetManualValidator.js';

const router = express.Router();

router.get('/', getTweet);

router.get('/:id', getTweetByIdManualValidator,  getTweetById);

router.post('/', validate(tweetSchema) , createTweet);


export default router;