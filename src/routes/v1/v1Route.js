import express from 'express'
import tweetRoute from './tweet.js'
import commentRoute from './comment.js'

const router = express.Router();

router.use('/tweet', tweetRoute);

router.use('/comment', commentRoute);

export default router;