const mongoose =require("mongoose")

const ClientSchema =new mongoose.Schema(
    {
        name:{
        type:String,
        require:true,
    },
    lastname:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    mobile:{
        type:String,
        require:true,
    },
    project:{
        type:String,
        require:true,
    }
}
)
const ClientModel =mongoose.model("client",ClientSchema)
module.exports =ClientModel