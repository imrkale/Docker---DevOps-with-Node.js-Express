const express=require('express')

const app = express()
const port=process.env.PORT || 2000

app.get("/", (req, res) =>{
    res.send("<h1>Server Running!!!</h1>")
})

app.listen(port,()=>console.log(`Listening to port: ${port}`))