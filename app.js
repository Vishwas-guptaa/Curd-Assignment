const express =require("express")
const app =express()
const port =5000
const connectdb =require("./db/connectDb")
const dotenv =require("dotenv")
const api =require("./routes/web")
const bodyParser = require('body-parser');
app.set('view engine','ejs')

connectdb()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.use("/",api)
dotenv.config({path :".env"})

app.listen(port,()=>{
    console.log('server is running on port 5000')
})