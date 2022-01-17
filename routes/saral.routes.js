const {get_saraldata,post_saraldata,update_saraldata,deleteByid}=require('../constroller/controller.saral')
const express=require('express')
const router=express.Router()

router.get('/',get_saraldata)

router.post('/api/saral',post_saraldata)

router.put('/api/saral/:id',update_saraldata)

router.delete('/api/saral/:id',deleteByid)

module.exports=router