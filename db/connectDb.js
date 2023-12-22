
const mongoose =require("mongoose")
// "mongodb+srv://vishwasgupta81779:vishwas123@cluster0.zrihqzq.mongodb.net/mern?retryWrites=true&w=majority"
DB_URL ="mongodb+srv://vishwasgupta81779:vishwas123@cluster0.wpdslcq.mongodb.net/Client?retryWrites=true&w=majority"
const connectdb =()=>{
    return mongoose
    .connect(DB_URL)

    .then(()=>{
        console.log('database connected')
    })
    .catch((error)=>{
        console.log(error)
    })
}
module.exports =connectdb