const mongoose = require("mongoose")
const config = async () => {
    try {
        await mongoose.connect("mongodb+srv://sahraouimariem234:ofJ8hvOzeCzXQ5yS@cluster0.osug4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
       console.log("database is connected")
    } catch (error) {
        console.log("database is not connected")
    }
}
module.exports=config