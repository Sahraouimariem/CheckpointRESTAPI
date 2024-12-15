const express=require ("express")
const { addactor } = require("../controller/actors")
const actorRouter=express.Router()
actorRouter.post("/add",addactor)
module.exports=actorRouter