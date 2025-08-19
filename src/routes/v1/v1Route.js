import express from 'express'
import tweetRouter from './tweet.js'
import commentRouter from './comment.js'

const router = express.Router();

router.use('/tweet', tweetRouter);

router.use('/comment', commentRouter);

export default router;