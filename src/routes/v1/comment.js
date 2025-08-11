import express from 'express'

const router = express.Router();

router.get('/', (req,res)=>{
    return res.json({
        message : "common comment"
    })
})

router.get('/:id',(req,res)=>{
    return res.json({
        message : "this is comment_id route",
        id : req.params.id
    })
})

export default router;