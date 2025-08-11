import express from 'express'

const router = express.Router();

router.get('/', (req,res)=>{
    return res.json({
        message : "common tweet"
    })
})

router.get('/:id',(req,res)=>{
    return res.json({
        message : "this is tweet_id route",
        id : req.params.id
    })
})

export default router;