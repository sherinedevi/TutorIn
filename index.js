const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('ok')
})

app.listen(3000)