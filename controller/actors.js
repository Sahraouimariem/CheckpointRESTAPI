const actors=require("../model/actors")
const addactor=async(req,res)=>{
    try {
        const actor=new actors(req.body)
        await actor.save()
        res.status(200).send({msg:"actor added successfully"})
    } catch (error) {
        res.status(500).send({msg:"actor not added"})
    }
}
module.exports={addactor}