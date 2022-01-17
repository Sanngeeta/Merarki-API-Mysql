const express=require('express')
const router = require('./routes/saral.routes')

const app=express()
app.use(express.json())

app.use('/',router)

app.listen(3000,()=>{
    console.log('PORT listing 3000')
})